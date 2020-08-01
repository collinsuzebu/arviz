"""CmdStan-specific conversion code."""
from collections import defaultdict
from glob import glob
from typing import Optional, Union, List
import os
import logging
import re

import numpy as np
import pandas as pd
import xarray as xr

from .. import utils
from .inference_data import InferenceData
from .base import requires, dict_to_dataset, generate_dims_coords, CoordSpec, DimSpec

_log = logging.getLogger(__name__)


class CmdStanConverter:
    """Encapsulate CmdStan specific logic."""

    # pylint: disable=too-many-instance-attributes

    def __init__(
        self,
        *,
        posterior=None,
        posterior_predictive=None,
        predictions=None,
        prior=None,
        prior_predictive=None,
        observed_data=None,
        observed_data_var=None,
        constant_data=None,
        constant_data_var=None,
        predictions_constant_data=None,
        predictions_constant_data_var=None,
        log_likelihood=None,
        coords=None,
        dims=None
    ):
        if isinstance(posterior, str):
            posterior_glob = glob(posterior)
            if len(posterior_glob) > 1:
                posterior = sorted(posterior_glob)
                msg = "\n".join(
                    "{}: {}".format(i, os.path.normpath(path))
                    for i, path in enumerate(posterior, 1)
                )
                len_p = len(posterior)
                _log.info("glob found %d files for 'posterior':\n%s", len_p, msg)
        self.posterior_ = posterior
        if isinstance(posterior_predictive, str):
            posterior_predictive_glob = glob(posterior_predictive)
            if len(posterior_predictive_glob) > 1:
                posterior_predictive = sorted(posterior_predictive_glob)
                msg = "\n".join(
                    "{}: {}".format(i, os.path.normpath(path))
                    for i, path in enumerate(posterior_predictive, 1)
                )
                len_pp = len(posterior_predictive)
                _log.info("glob found %d files for 'posterior_predictive':\n%s", len_pp, msg)
        if isinstance(predictions, str):
            predictions_glob = glob(predictions)
            if len(predictions_glob) > 1:
                predictions = sorted(predictions_glob)
                msg = "\n".join(
                    "{}: {}".format(i, os.path.normpath(path))
                    for i, path in enumerate(predictions, 1)
                )
                len_p = len(predictions)
                _log.info("glob found %d files for 'predictions':\n%s", len_p, msg)
        if isinstance(prior, str):
            prior_glob = glob(prior)
            if len(prior_glob) > 1:
                prior = sorted(prior_glob)
                msg = "\n".join(
                    "{}: {}".format(i, os.path.normpath(path)) for i, path in enumerate(prior, 1)
                )
                len_p = len(prior)
                _log.info("glob found %d files for 'prior':\n%s", len_p, msg)
        if isinstance(prior_predictive, str):
            prior_predictive_glob = glob(prior_predictive)
            if len(prior_predictive_glob) > 1:
                prior_predictive = sorted(prior_predictive_glob)
                msg = "\n".join(
                    "{}: {}".format(i, os.path.normpath(path))
                    for i, path in enumerate(prior_predictive, 1)
                )
                len_pp = len(prior_predictive)
                _log.info("glob found %d files for 'prior_predictive':\n%s", len_pp, msg)
        if isinstance(log_likelihood, str):
            log_likelihood_glob = glob(log_likelihood)
            if len(log_likelihood_glob) > 1:
                log_likelihood = sorted(log_likelihood_glob)
                msg = "\n".join(
                    "{}: {}".format(i, os.path.normpath(path))
                    for i, path in enumerate(log_likelihood, 1)
                )
                len_ll = len(log_likelihood)
                _log.info("glob found %d files for 'log_likelihood':\n%s", len_ll, msg)
        self.posterior_predictive = posterior_predictive
        self.predictions = predictions
        self.prior_ = prior
        self.prior_predictive = prior_predictive
        self.observed_data = observed_data
        self.observed_data_var = observed_data_var
        self.constant_data = constant_data
        self.constant_data_var = constant_data_var
        self.predictions_constant_data = predictions_constant_data
        self.predictions_constant_data_var = predictions_constant_data_var
        self.log_likelihood = log_likelihood
        self.coords = coords if coords is not None else {}
        self.dims = dims if dims is not None else {}
        self.posterior = None
        self.sample_stats = None
        self.prior = None
        self.sample_stats_prior = None

        # populate posterior and sample_stats
        self._parse_posterior()
        self._parse_prior()

    @requires("posterior_")
    def _parse_posterior(self):
        """Read csv paths to list of dataframes."""
        paths = self.posterior_
        if isinstance(paths, str):
            paths = [paths]
        chain_data = []
        for path in paths:
            chain_data.append(_read_output(path))

        self.posterior = (
            [item["sample"] for item in chain_data],
            [item["sample_warmup"] for item in chain_data],
        )
        self.sample_stats = (
            [item["sample_stats"] for item in chain_data],
            [item["sample_stats_warmup"] for item in chain_data],
        )

    @requires("prior_")
    def _parse_prior(self):
        """Read csv paths to list of dataframes."""
        paths = self.prior_
        if isinstance(paths, str):
            paths = [paths]
        chain_data = []
        for path in paths:
            chain_data.append(_read_output(path))

        self.prior = (
            [item["sample"] for item in chain_data],
            [item["sample_warmup"] for item in chain_data],
        )
        self.sample_stats_prior = (
            [item["sample_stats"] for item in chain_data],
            [item["sample_stats_warmup"] for item in chain_data],
        )

    @requires("posterior")
    def posterior_to_xarray(self):
        """Extract posterior samples from output csv."""
        if self.posterior[0][0].empty:
            columns = self.posterior[0][0].columns
        else:
            columns = self.posterior[1][0].columns

        # filter posterior_predictive, predictions and log_likelihood
        posterior_predictive = self.posterior_predictive
        if posterior_predictive is None or (
            isinstance(posterior_predictive, str) and posterior_predictive.lower().endswith(".csv")
        ):
            posterior_predictive = []
        elif isinstance(posterior_predictive, str):
            posterior_predictive = [
                col for col in columns if posterior_predictive == col.split(".")[0]
            ]
        else:
            posterior_predictive = [
                col
                for col in columns
                if any(item == col.split(".")[0] for item in posterior_predictive)
            ]

        predictions = self.predictions
        if predictions is None or (
            isinstance(predictions, str) and predictions.lower().endswith(".csv")
        ):
            predictions = []
        elif isinstance(predictions, str):
            predictions = [col for col in columns if predictions == col.split(".")[0]]
        else:
            predictions = [
                col for col in columns if any(item == col.split(".")[0] for item in predictions)
            ]

        log_likelihood = self.log_likelihood
        if log_likelihood is None or (
            isinstance(log_likelihood, str) and log_likelihood.lower().endswith(".csv")
        ):
            log_likelihood = []
        elif isinstance(log_likelihood, str):
            log_likelihood = [col for col in columns if log_likelihood == col.split(".")[0]]
        else:
            log_likelihood = [
                col for col in columns if any(item == col.split(".")[0] for item in log_likelihood)
            ]

        invalid_cols = posterior_predictive + predictions + log_likelihood
        valid_cols = [col for col in columns if col not in invalid_cols]
        data = _unpack_dataframes([item[valid_cols] for item in self.posterior[0]])
        data_warmup = _unpack_dataframes([item[valid_cols] for item in self.posterior[1]])
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    @requires("posterior")
    @requires("sample_stats")
    def sample_stats_to_xarray(self):
        """Extract sample_stats from fit."""
        dtypes = {"divergent__": bool, "n_leapfrog__": np.int64, "treedepth__": np.int64}

        sampler_params, sampler_params_warmup = self.sample_stats

        for j, s_params in enumerate(sampler_params):
            rename_dict = {}
            for key in s_params:
                key_, *end = key.split(".")
                name = re.sub("__$", "", key_)
                name = "diverging" if name == "divergent" else name
                rename_dict[key] = ".".join((name, *end))
                sampler_params[j][key] = s_params[key].astype(dtypes.get(key_))
                sampler_params_warmup[j][key] = sampler_params_warmup[j][key].astype(
                    dtypes.get(key_)
                )
            sampler_params[j] = sampler_params[j].rename(columns=rename_dict)
            sampler_params_warmup[j] = sampler_params_warmup[j].rename(columns=rename_dict)
        data = _unpack_dataframes(sampler_params)
        data_warmup = _unpack_dataframes(sampler_params_warmup)
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    @requires("posterior")
    @requires("posterior_predictive")
    def posterior_predictive_to_xarray(self):
        """Convert posterior_predictive samples to xarray."""
        posterior_predictive = self.posterior_predictive
        
        if self.posterior[0][0].empty:
            columns = self.posterior[0][0].columns
        else:
            columns = self.posterior[1][0].columns

        if (
            isinstance(posterior_predictive, (tuple, list))
            and posterior_predictive[0].endswith(".csv")
        ) or (isinstance(posterior_predictive, str) and posterior_predictive.endswith(".csv")):
            if isinstance(posterior_predictive, str):
                posterior_predictive = [posterior_predictive]
            chain_data = []
            chain_data_warmup = []
            for path in posterior_predictive:
                parsed_output = _read_output(path)
                chain_data.append(parsed_output["sample"])
                chain_data_warmup.append(parsed_output["sample_warmup"])
            data = _unpack_dataframes(chain_data), _unpack_dataframes(chain_data_warmup)
        else:
            if isinstance(posterior_predictive, str):
                posterior_predictive = [posterior_predictive]
            posterior_predictive_cols = [
                col
                for col in columns
                if any(item == col.split(".")[0] for item in posterior_predictive)
            ]
            data = _unpack_dataframes([item[posterior_predictive_cols] for item in self.posterior[0]])
            data_warmup = _unpack_dataframes([item[posterior_predictive_cols] for item in self.posterior[1]])
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    @requires("posterior")
    @requires("predictions")
    def predictions_to_xarray(self):
        """Convert out of sample predictions samples to xarray."""
        predictions = self.predictions

        if self.posterior[0][0].empty:
            columns = self.posterior[0][0].columns
        else:
            columns = self.posterior[1][0].columns

        if (isinstance(predictions, (tuple, list)) and predictions[0].endswith(".csv")) or (
            isinstance(predictions, str) and predictions.endswith(".csv")
        ):
            if isinstance(predictions, str):
                predictions = [predictions]
            chain_data = []
            chain_data_warmup = []
            for path in predictions:
                parsed_output = _read_output(path)
                chain_data.append(parsed_output["sample"])
                chain_data_warmup.append(parsed_output["sample_warmup"])
            data = _unpack_dataframes(chain_data), _unpack_dataframes(chain_data_warmup)
        else:
            if isinstance(predictions, str):
                predictions = [predictions]
            predictions_cols = [
                col for col in columns if any(item == col.split(".")[0] for item in predictions)
            ]
            data = _unpack_dataframes([item[predictions_cols] for item in self.posterior[0]])
            data_warmup = _unpack_dataframes([item[predictions_cols] for item in self.posterior[0]])
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    @requires("prior")
    def prior_to_xarray(self):
        """Convert prior samples to xarray."""
        # filter prior_predictive
        prior_predictive = self.prior_predictive
        
        if self.prior[0][0].empty:
            columns = self.prior[0][0].columns
        else:
            columns = self.prior[1][0].columns

        if prior_predictive is None or (
            isinstance(prior_predictive, str) and prior_predictive.lower().endswith(".csv")
        ):
            prior_predictive = []
        elif isinstance(prior_predictive, str):
            prior_predictive = [col for col in columns if prior_predictive == col.split(".")[0]]
        else:
            prior_predictive = [
                col
                for col in columns
                if any(item == col.split(".")[0] for item in prior_predictive)
            ]

        invalid_cols = prior_predictive
        valid_cols = [col for col in columns if col not in invalid_cols]
        data = _unpack_dataframes([item[valid_cols] for item in self.prior[0]])
        data_warmup = _unpack_dataframes([item[valid_cols] for item in self.prior[1]])
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    @requires("prior")
    @requires("sample_stats_prior")
    def sample_stats_prior_to_xarray(self):
        """Extract sample_stats from fit."""
        dtypes = {"divergent__": bool, "n_leapfrog__": np.int64, "treedepth__": np.int64}

        sampler_params, sampler_params_warmup = self.sample_stats_prior
        for j, s_params in enumerate(sampler_params):
            rename_dict = {}
            for key in s_params:
                key_, *end = key.split(".")
                name = re.sub("__$", "", key_)
                name = "diverging" if name == "divergent" else name
                rename_dict[key] = ".".join((name, *end))
                sampler_params[j][key] = s_params[key].astype(dtypes.get(key_))
                sampler_params_warmup[j][key] = sampler_params_warmup[j][key].astype(
                    dtypes.get(key_)
                )
            sampler_params[j] = sampler_params[j].rename(columns=rename_dict)
            sampler_params_warmup[j] = sampler_params_warmup[j].rename(columns=rename_dict)
        data = _unpack_dataframes(sampler_params)
        data_warmup = _unpack_dataframes(sampler_params_warmup)
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    @requires("prior")
    @requires("prior_predictive")
    def prior_predictive_to_xarray(self):
        """Convert prior_predictive samples to xarray."""
        prior_predictive = self.prior_predictive

        if self.prior[0][0].empty:
            columns = self.prior[0][0].columns
        else:
            columns = self.prior[1][0].columns

        if (
            isinstance(prior_predictive, (tuple, list)) and prior_predictive[0].endswith(".csv")
        ) or (isinstance(prior_predictive, str) and prior_predictive.endswith(".csv")):
            if isinstance(prior_predictive, str):
                prior_predictive = [prior_predictive]
            chain_data = []
            chain_data_warmup = []
            for path in prior_predictive:
                parsed_output = _read_output(path)
                chain_data.append(parsed_output["sample"])
                chain_data_warmup.append(parsed_output["sample_warmup"])
            data = _unpack_dataframes(chain_data), _unpack_dataframes(chain_data_warmup)
        else:
            if isinstance(prior_predictive, str):
                prior_predictive = [prior_predictive]
            prior_predictive_cols = [
                col
                for col in columns
                if any(item == col.split(".")[0] for item in prior_predictive)
            ]
            data = _unpack_dataframes([item[prior_predictive_cols] for item in self.prior[0]])
            data_warmup = _unpack_dataframes([item[prior_predictive_cols] for item in self.prior[1]])
            )
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    @requires("observed_data")
    def observed_data_to_xarray(self):
        """Convert observed data to xarray."""
        observed_data_raw = _read_data(self.observed_data)
        variables = self.observed_data_var
        if isinstance(variables, str):
            variables = [variables]
        observed_data = {}
        for key, vals in observed_data_raw.items():
            if variables is not None and key not in variables:
                continue
            vals = utils.one_de(vals)
            val_dims = self.dims.get(key)
            val_dims, coords = generate_dims_coords(
                vals.shape, key, dims=val_dims, coords=self.coords
            )
            observed_data[key] = xr.DataArray(vals, dims=val_dims, coords=coords)
        return xr.Dataset(data_vars=observed_data)

    @requires("constant_data")
    def constant_data_to_xarray(self):
        """Convert constant data to xarray."""
        constant_data_raw = _read_data(self.constant_data)
        variables = self.constant_data_var
        if isinstance(variables, str):
            variables = [variables]
        constant_data = {}
        for key, vals in constant_data_raw.items():
            if variables is not None and key not in variables:
                continue
            vals = utils.one_de(vals)
            val_dims = self.dims.get(key)
            val_dims, coords = generate_dims_coords(
                vals.shape, key, dims=val_dims, coords=self.coords
            )
            constant_data[key] = xr.DataArray(vals, dims=val_dims, coords=coords)
        return xr.Dataset(data_vars=constant_data)

    @requires("predictions_constant_data")
    def predictions_constant_data_to_xarray(self):
        """Convert predictions constant data to xarray."""
        predictions_constant_data_raw = _read_data(self.predictions_constant_data)
        variables = self.predictions_constant_data_var
        if isinstance(variables, str):
            variables = [variables]
        predictions_constant_data = {}
        for key, vals in predictions_constant_data_raw.items():
            if variables is not None and key not in variables:
                continue
            vals = utils.one_de(vals)
            val_dims = self.dims.get(key)
            val_dims, coords = generate_dims_coords(
                vals.shape, key, dims=val_dims, coords=self.coords
            )
            predictions_constant_data[key] = xr.DataArray(vals, dims=val_dims, coords=coords)
        return xr.Dataset(data_vars=predictions_constant_data)

    @requires("posterior")
    @requires("log_likelihood")
    def log_likelihood_to_xarray(self):
        """Convert elementwise log_likelihood samples to xarray."""
        log_likelihood = self.log_likelihood

        if self.posterior[0][0].empty:
            columns = self.posterior[0][0].columns
        else:
            columns = self.posterior[1][0].columns

        if (isinstance(log_likelihood, (tuple, list)) and log_likelihood[0].endswith(".csv")) or (
            isinstance(log_likelihood, str) and log_likelihood.endswith(".csv")
        ):
            if isinstance(log_likelihood, str):
                log_likelihood = [log_likelihood]

            chain_data = []
            chain_data_warmup = []
            for path in log_likelihood:
                parsed_output = _read_output(path)
                chain_data.append(parsed_output["sample"])
                chain_data_warmup.append(parsed_output["sample_warmup"])
            data = _unpack_dataframes(chain_data), _unpack_dataframes(chain_data_warmup)
        else:
            if isinstance(log_likelihood, str):
                log_likelihood = [log_likelihood]
            log_likelihood_cols = [
                col for col in columns if any(item == col.split(".")[0] for item in log_likelihood)
            ]
            data = _unpack_dataframes([item[log_likelihood_cols] for item in self.posterior[0]])
            data_warmup = _unpack_dataframes([item[log_likelihood_cols] for item in self.posterior[1]])
        return (
            dict_to_dataset(data, coords=self.coords, dims=self.dims), 
            dict_to_dataset(data_warmup, coords=self.coords, dims=self.dims)
        )

    def to_inference_data(self):
        """Convert all available data to an InferenceData object.

        Note that if groups can not be created (i.e., there is no `output`, so
        the `posterior` and `sample_stats` can not be extracted), then the InferenceData
        will not have those groups.
        """
        return InferenceData(
            **{
                "posterior": self.posterior_to_xarray(),
                "sample_stats": self.sample_stats_to_xarray(),
                "log_likelihood": self.log_likelihood_to_xarray(),
                "posterior_predictive": self.posterior_predictive_to_xarray(),
                "prior": self.prior_to_xarray(),
                "sample_stats_prior": self.sample_stats_prior_to_xarray(),
                "prior_predictive": self.prior_predictive_to_xarray(),
                "observed_data": self.observed_data_to_xarray(),
                "constant_data": self.constant_data_to_xarray(),
                "predictions": self.predictions_to_xarray(),
                "predictions_constant_data": self.predictions_constant_data_to_xarray(),
            }
        )


def _process_configuration(comments):
    """Extract sampling information."""
    results = {
        "extra": [],
        "stan_version": {},
    }

    comments_gen = iter(comments)

    for comment in comments_gen:
        comment = comment.strip("#").strip()
        if comment.startswith("num_samples"):
            results["num_samples"] = int(comment.strip("num_samples = ").strip("(Default)"))
        elif comment.startswith("num_warmup"):
            results["num_warmup"] = int(comment.strip("num_warmup = ").strip("(Default)"))
        elif comment.startswith("save_warmup"):
            results["save_warmup"] = bool(int(comment.strip("save_warmup = ").strip("(Default)")))
        elif comment.startswith("thin"):
            results["thin"] = int(comment.strip("thin = ").strip("(Default)"))
        elif comment.startswith("stan_version_"):
            key, val = comment.strip("stan_version_").split("=")
            results["stan_version"][key.strip()] = val.strip()
        elif comment.startswith("Step size"):
            _, val = comment.split("=")
            results["step_size"] = float(val.strip())
        elif "inverse mass matrix" in comment:
            comment = next(comments_gen).strip("#").strip()
            results["step_size"] = np.array(comment.split(","), dtype=float)
        elif ("seconds" in comment) and any(
            item in comment for item in ("(Warm-up)", "(Sampling)", "(Total)")
        ):
            value = (
                comment.strip("Elapsed Time:")
                .strip("seconds (Warm-up)")
                .strip("seconds (Sampling)")
                .strip("seconds (Total)")
            )
            key = (
                "warmup"
                if "(Warm-up)" in comment
                else "sampling"
                if "(Sampling)" in comment
                else "total"
            )
            results[key] = float(value)
        else:
            results["extra"].append(comment)

    return results


def _read_output_file(path):
    comments = []

    # read comments
    with open(path, "rb") as f_obj:
        for line in f_obj:
            if line.startswith(b"#"):
                comments.append(line.decode("utf-8").strip())

    with open(path, "rb") as f_obj:
        data = pd.read_csv(f_obj, comment="#")

    return data, comments


def _read_output(path):
    """Read CmdStan output csv file.

    Parameters
    ----------
    path : str

    Returns
    -------
    Dict[str, Any]
    """
    # Read data
    data, comments = _read_output_file(path)

    pconf = _process_configuration(comments)

    # split dataframe to warmup and draws
    saved_warmup = pconf.get("save_warmup", 0) * pconf.get("num_warmup", 0) // pconf.get("thin", 1)

    data_warmup = data.iloc[:saved_warmup, :]
    data = data.iloc[saved_warmup:, :]

    # Split data to sample_stats and sample
    sample_stats_columns = [col for col in data.columns if col.endswith("__")]
    sample_columns = [col for col in data.columns if col not in sample_stats_columns]

    sample_stats = data.loc[:, sample_stats_columns]
    sample_data = data.loc[:, sample_columns]

    sample_stats_warmup = data_warmup.loc[:, sample_stats_columns]
    sample_data_warmup = data_warmup.loc[:, sample_columns]

    return {
        "sample": sample_data,
        "sample_stats": sample_stats,
        "sample_warmup": sample_data_warmup,
        "sample_stats_warmup": sample_stats_warmup,
        "configuration_info": pconf,
    }


def _process_data_var(string):
    """Transform datastring to key, values pair.

    All values are transformed to floating point values.

    Parameters
    ----------
    string : str

    Returns
    -------
    Tuple[Str, Str]
        key, values pair
    """
    key, var = string.split("<-")
    if "structure" in var:
        var, dim = var.replace("structure(", "").replace(",", "").split(".Dim")
        # dtype = int if '.' not in var and 'e' not in var.lower() else float
        dtype = float
        var = var.replace("c(", "").replace(")", "").strip().split()
        dim = dim.replace("=", "").replace("c(", "").replace(")", "").strip().split()
        dim = tuple(map(int, dim))
        var = np.fromiter(map(dtype, var), dtype).reshape(dim, order="F")
    elif "c(" in var:
        # dtype = int if '.' not in var and 'e' not in var.lower() else float
        dtype = float
        var = var.replace("c(", "").replace(")", "").split(",")
        var = np.fromiter(map(dtype, var), dtype)
    else:
        # dtype = int if '.' not in var and 'e' not in var.lower() else float
        dtype = float
        var = dtype(var)
    return key.strip(), var


def _read_data(path):
    """Read Rdump output and transform to Python dictionary.

    Parameters
    ----------
    path : str

    Returns
    -------
    Dict
        key, values pairs from Rdump formatted data.
    """
    data = {}
    with open(path, "r") as f_obj:
        var = ""
        for line in f_obj:
            if "<-" in line:
                if len(var):
                    key, var = _process_data_var(var)
                    data[key] = var
                var = ""
            var += " " + line.strip()
        if len(var):
            key, var = _process_data_var(var)
            data[key] = var
    return data


def _unpack_dataframes(dfs):
    """Transform a list of pandas.DataFrames to dictionary containing ndarrays.

    Parameters
    ----------
    dfs : List[pandas.DataFrame]

    Returns
    -------
    Dict
        key, values pairs. Values are formatted to shape = (nchain, ndraws, *shape)
    """
    col_groups = defaultdict(list)
    columns = dfs[0].columns
    for col in columns:
        key, *loc = col.split(".")
        loc = tuple(int(i) - 1 for i in loc)
        col_groups[key].append((col, loc))

    chains = len(dfs)
    draws = len(dfs[0])
    sample = {}
    for key, cols_locs in col_groups.items():
        ndim = np.array([loc for _, loc in cols_locs]).max(0) + 1
        dtype = dfs[0][cols_locs[0][0]].dtype
        sample[key] = utils.full((chains, draws, *ndim), 0, dtype=dtype)
        for col, loc in cols_locs:
            for chain_id, df in enumerate(dfs):
                draw = df[col].values
                if loc == ():
                    sample[key][chain_id, :] = draw
                else:
                    axis1_all = range(sample[key].shape[1])
                    slicer = (chain_id, axis1_all, *loc)
                    sample[key][slicer] = draw
    return sample


def from_cmdstan(
    posterior: Optional[Union[str, List[str]]] = None,
    *,
    posterior_predictive: Optional[Union[str, List[str]]] = None,
    predictions: Optional[Union[str, List[str]]] = None,
    prior: Optional[Union[str, List[str]]] = None,
    prior_predictive: Optional[Union[str, List[str]]] = None,
    observed_data: Optional[str] = None,
    observed_data_var: Optional[Union[str, List[str]]] = None,
    constant_data: Optional[str] = None,
    constant_data_var: Optional[Union[str, List[str]]] = None,
    predictions_constant_data: Optional[str] = None,
    predictions_constant_data_var: Optional[Union[str, List[str]]] = None,
    log_likelihood: Optional[Union[str, List[str]]] = None,
    coords: Optional[CoordSpec] = None,
    dims: Optional[DimSpec] = None
) -> InferenceData:
    """Convert CmdStan data into an InferenceData object.

    For a usage example read the
    :doc:`Cookbook section on from_cmdstan </notebooks/InferenceDataCookbook>`

    Parameters
    ----------
    posterior : str or list of str, optional
        List of paths to output.csv files.
    posterior_predictive : str or list of str, optional
        Posterior predictive samples for the fit. If endswith ".csv" assumes file.
    predictions : str or list of str, optional
        Out of sample predictions samples for the fit. If endswith ".csv" assumes file.
    prior : str or list of str, optional
        List of paths to output.csv files
    prior_predictive : str or list of str, optional
        Prior predictive samples for the fit. If endswith ".csv" assumes file.
    observed_data : str, optional
        Observed data used in the sampling. Path to data file in Rdump format.
    observed_data_var : str or list of str, optional
        Variable(s) used for slicing observed_data. If not defined, all
        data variables are imported.
    constant_data : str, optional
        Constant data used in the sampling. Path to data file in Rdump format.
    constant_data_var : str or list of str, optional
        Variable(s) used for slicing constant_data. If not defined, all
        data variables are imported.
    predictions_constant_data : str, optional
        Constant data for predictions used in the sampling.
        Path to data file in Rdump format.
    predictions_constant_data_var : str or list of str, optional
        Variable(s) used for slicing predictions_constant_data.
        If not defined, all data variables are imported.
    log_likelihood : str or list of str, optional
        Pointwise log_likelihood for the data.
    coords : dict of {str: array_like}, optional
        A dictionary containing the values that are used as index. The key
        is the name of the dimension, the values are the index values.
    dims : dict of {str: list of str, optional
        A mapping from variables to a list of coordinate names for the variable.

    Returns
    -------
    InferenceData object
    """
    return CmdStanConverter(
        posterior=posterior,
        posterior_predictive=posterior_predictive,
        predictions=predictions,
        prior=prior,
        prior_predictive=prior_predictive,
        observed_data=observed_data,
        observed_data_var=observed_data_var,
        constant_data=constant_data,
        constant_data_var=constant_data_var,
        predictions_constant_data=predictions_constant_data,
        predictions_constant_data_var=predictions_constant_data_var,
        log_likelihood=log_likelihood,
        coords=coords,
        dims=dims,
    ).to_inference_data()
