(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("c7803314-0670-4c3d-824e-7340c016476d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c7803314-0670-4c3d-824e-7340c016476d' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;9d25c04b-09f4-482d-912b-bc47b422a63b&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67632&quot;}},&quot;id&quot;:&quot;67627&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67652&quot;}},&quot;id&quot;:&quot;67656&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67652&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67653&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67654&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67656&quot;}},&quot;id&quot;:&quot;67655&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67620&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67632&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;fR0twU2O5D8k51QcZq7kP8uwfHd+zuQ/cnqk0pbu5D8aRMwtrw7lP8EN9IjHLuU/aNcb5N9O5T8PoUM/+G7lP7Zqa5oQj+U/XTST9Siv5T8F/rpQQc/lP6zH4qtZ7+U/U5EKB3IP5j/6WjJiii/mP6EkWr2iT+Y/SO6BGLtv5j/vt6lz04/mP5eB0c7rr+Y/Pkv5KQTQ5j/lFCGFHPDmP4zeSOA0EOc/M6hwO00w5z/acZiWZVDnP4E7wPF9cOc/KQXoTJaQ5z/Qzg+orrDnP3eYNwPH0Oc/HmJfXt/w5z/FK4e59xDoP2z1rhQQMeg/E7/WbyhR6D+7iP7KQHHoP2JSJiZZkeg/CRxOgXGx6D+w5XXcidHoP1evnTei8eg//njFkroR6T+mQu3t0jHpP00MFUnrUek/9NU8pANy6T+bn2T/G5LpP0JpjFo0suk/6TK0tUzS6T+Q/NsQZfLpPzjGA2x9Euo/348rx5Uy6j+GWVMirlLqPy0je33Gcuo/1Oyi2N6S6j97tsoz97LqPyKA8o4P0+o/ykka6ifz6j9xE0JFQBPrPxjdaaBYM+s/v6aR+3BT6z9mcLlWiXPrPw064bGhk+s/tAMJDbqz6z9czTBo0tPrPwOXWMPq8+s/qmCAHgMU7D9RKqh5GzTsP/jzz9QzVOw/n733L0x07D+fvfcvTHTsP5+99y9MdOw/+PPP1DNU7D9RKqh5GzTsP6pggB4DFOw/A5dYw+rz6z9czTBo0tPrP7QDCQ26s+s/DTrhsaGT6z9mcLlWiXPrP7+mkftwU+s/GN1poFgz6z9xE0JFQBPrP8pJGuon8+o/IoDyjg/T6j97tsoz97LqP9Tsotjekuo/LSN7fcZy6j+GWVMirlLqP9+PK8eVMuo/OMYDbH0S6j+Q/NsQZfLpP+kytLVM0uk/QmmMWjSy6T+bn2T/G5LpP/TVPKQDcuk/TQwVSetR6T+mQu3t0jHpP/54xZK6Eek/V6+dN6Lx6D+w5XXcidHoPwkcToFxseg/YlImJlmR6D+7iP7KQHHoPxO/1m8oUeg/bPWuFBAx6D/FK4e59xDoPx5iX17f8Oc/d5g3A8fQ5z/Qzg+orrDnPykF6EyWkOc/gTvA8X1w5z/acZiWZVDnPzOocDtNMOc/jN5I4DQQ5z/lFCGFHPDmPz5L+SkE0OY/l4HRzuuv5j/vt6lz04/mP0jugRi7b+Y/oSRavaJP5j/6WjJiii/mP1ORCgdyD+Y/rMfiq1nv5T8F/rpQQc/lP100k/Uor+U/tmprmhCP5T8PoUM/+G7lP2jXG+TfTuU/wQ30iMcu5T8aRMwtrw7lP3J6pNKW7uQ/y7B8d37O5D8k51QcZq7kP30dLcFNjuQ/fR0twU2O5D8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[130]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADi9yObHh3AP+L3I5seHcA/p5GCnAK5wD8chPnh7KnBP4sWPTji9sI/Hqqyp7STxD+G4p1Y4XbGP1vsuzq8rsg/SP72bwUuyz/wgefPZgzOPzqex4LalNA/8R+mf+JC0j8TuyAaSBDUPzZ7/dLa79U/Xz/MccPi1z+glsLqcd/ZP3ssgBpB6ds/SjG3inf73T+r3HtXUQTgP6L8cGPtCuE/4WBuoLwO4j8boUCIQRDjP4gUI0MoDuQ/MF6PsZ4D5T8oHTCdd/TlP3GCoVTg3uY/17IQTJzA5z8nXBXfIZ3oP9BNNkYceOk/lKFOU2VF6j9J83b4gRHrP4Z9S/vZ3Os/Ltt1L7Wm7D+OYGRrOHLtP/nvpw2XQ+4/OsvHlKQd7z/62FM3hf3vP0R7XMNQd/A//Kc/jXb48D86A04biYTxP3oveHD/HfI/1lMrvKLE8j+1jFDIxHjzPxYz/xV7OvQ/2BKItdwJ9T9ijT71++f1PzpdH5B70PY/m+afvK7C9z+OHwXiT7v4P8pslelzuPk/NXuYXfy1+j8yKLfwe7D7P9QjWw01pvw/KqTQIH+O/T+b55pAzmj+P5GDjvl5Mv8/2ZSobtLp/z/NQFIObkUAQIThjI2EiQBApquhjJ3DAEDkt/DjSvIAQAYKwQQ0FwFAPy+ijGYyAUCAOKt0bEYBQFiEEY3eUwFAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[130]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67675&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67674&quot;}},&quot;id&quot;:&quot;67657&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67609&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67624&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67658&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67680&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67681&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67633&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67623&quot;},{&quot;id&quot;:&quot;67624&quot;},{&quot;id&quot;:&quot;67625&quot;},{&quot;id&quot;:&quot;67626&quot;},{&quot;id&quot;:&quot;67627&quot;},{&quot;id&quot;:&quot;67628&quot;},{&quot;id&quot;:&quot;67629&quot;},{&quot;id&quot;:&quot;67630&quot;}]},&quot;id&quot;:&quot;67680&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67619&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67622&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67616&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67631&quot;}},&quot;id&quot;:&quot;67625&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67657&quot;}},&quot;id&quot;:&quot;67661&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67657&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67658&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67659&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67661&quot;}},&quot;id&quot;:&quot;67660&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67615&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67618&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67659&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67672&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67606&quot;},0,0]]},&quot;id&quot;:&quot;67679&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67664&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67620&quot;}},&quot;id&quot;:&quot;67619&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67673&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67623&quot;},{&quot;id&quot;:&quot;67624&quot;},{&quot;id&quot;:&quot;67625&quot;},{&quot;id&quot;:&quot;67626&quot;},{&quot;id&quot;:&quot;67627&quot;},{&quot;id&quot;:&quot;67628&quot;},{&quot;id&quot;:&quot;67629&quot;},{&quot;id&quot;:&quot;67630&quot;}]},&quot;id&quot;:&quot;67633&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67662&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67630&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67615&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67618&quot;},{&quot;id&quot;:&quot;67622&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67619&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67645&quot;},{&quot;id&quot;:&quot;67650&quot;},{&quot;id&quot;:&quot;67655&quot;},{&quot;id&quot;:&quot;67660&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67662&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67633&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67607&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67611&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67609&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67613&quot;}},&quot;id&quot;:&quot;67606&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67607&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67674&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67681&quot;},{&quot;id&quot;:&quot;67679&quot;}]},&quot;id&quot;:&quot;67682&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67643&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67675&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67666&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;wTKOea0LvT/6f8xScAy+PzPNCiwzDb8/No2kAvsGwD/Ts0NvXIfAP3Da4tu9B8E/DAGCSB+IwT+pJyG1gAjCP0VOwCHiiMI/4nRfjkMJwz9+m/76pInDPxvCnWcGCsQ/uOg81GeKxD9UD9xAyQrFP/E1e60qi8U/jlwaGowLxj8qg7mG7YvGP8apWPNODMc/Y9D3X7CMxz8A95bMEQ3IP5wdNjlzjcg/OUTVpdQNyT/WanQSNo7JP3KRE3+XDso/Driy6/iOyj+s3lFYWg/LP0gF8cS7j8s/5CuQMR0QzD+BUi+efpDMPx55zgrgEM0/up9td0GRzT9XxgzkohHOP/Tsq1AEks4/kBNLvWUSzz8sOuopx5LPP2WwREuUCdA/s0OUAcVJ0D8B1+O39YnQP1BqM24mytA/nv2CJFcK0T/skNLah0rRPzokIpG4itE/ibdxR+nK0T/XSsH9GQvSPyXeELRKS9I/dHFganuL0j/CBLAgrMvSPxCY/9bcC9M/XitPjQ1M0z+tvp5DPozTP/tR7vluzNM/SeU9sJ8M1D+YeI1m0EzUP+YL3RwBjdQ/NJ8s0zHN1D+DMnyJYg3VP9HFyz+TTdU/H1kb9sON1T9t7Gqs9M3VP7x/umIlDtY/ChMKGVZO1j9YplnPho7WP6c5qYW3ztY/9cz4O+gO1z9DYEjyGE/XP5Hzl6hJj9c/4IbnXnrP1z8uGjcVqw/YP3ythsvbT9g/ykDWgQyQ2D8Z1CU4PdDYP2dnde5tENk/tfrEpJ5Q2T8EjhRbz5DZP1IhZBEA0dk/oLSzxzAR2j/vRwN+YVHaPz3bUjSSkdo/i26i6sLR2j/ZAfKg8xHbP9kB8qDzEds/2QHyoPMR2z+LbqLqwtHaPz3bUjSSkdo/70cDfmFR2j+gtLPHMBHaP1IhZBEA0dk/BI4UW8+Q2T+1+sSknlDZP2dnde5tENk/GdQlOD3Q2D/KQNaBDJDYP3ythsvbT9g/Lho3FasP2D/ghudees/XP5Hzl6hJj9c/Q2BI8hhP1z/1zPg76A7XP6c5qYW3ztY/WKZZz4aO1j8KEwoZVk7WP7x/umIlDtY/bexqrPTN1T8fWRv2w43VP9HFyz+TTdU/gzJ8iWIN1T80nyzTMc3UP+YL3RwBjdQ/mHiNZtBM1D9J5T2wnwzUP/tR7vluzNM/rb6eQz6M0z9eK0+NDUzTPxCY/9bcC9M/wgSwIKzL0j90cWBqe4vSPyXeELRKS9I/10rB/RkL0j+Jt3FH6crRPzokIpG4itE/7JDS2odK0T+e/YIkVwrRP1BqM24mytA/Adfjt/WJ0D+zQ5QBxUnQP2WwREuUCdA/LDrqKceSzz+QE0u9ZRLPP/Tsq1AEks4/V8YM5KIRzj+6n213QZHNPx55zgrgEM0/gVIvnn6QzD/kK5AxHRDMP0gF8cS7j8s/rN5RWFoPyz8OuLLr+I7KP3KRE3+XDso/1mp0EjaOyT85RNWl1A3JP5wdNjlzjcg/APeWzBENyD9j0PdfsIzHP8apWPNODMc/KoO5hu2Lxj+OXBoajAvGP/E1e60qi8U/VA/cQMkKxT+46DzUZ4rEPxvCnWcGCsQ/fpv++qSJwz/idF+OQwnDP0VOwCHiiMI/qSchtYAIwj8MAYJIH4jBP3Da4tu9B8E/07NDb1yHwD82jaQC+wbAPzPNCiwzDb8/+n/MUnAMvj/BMo55rQu9P8EyjnmtC70/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[162]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb6w/7hRAFAhvrD/uFEAUD96gOHVwQBQHDH4oZcvgBAJF1yl5xwAEBWNYdYsRsAQFsy9ph7gP8//dto0Q/A/j/+dVhKPvL9P1jM4oMPG/0/5EetSZ4//D+8BBxZsl77P72C92Pdffo/gUiRfFKd+T8Iz1oTfMP4P/cy/NXY7fc/aeg+bCYj9z9xGJSGm2H2P9Njnp/HqPU/jainScr79D868fMH/ln0P2AOqKvuv/M/e9PgoG0s8z+nD2ma9aDyP75jtgPpGfI/cDdPoLCV8T+30PzKMxTxP62LI9WflPA/YBR9tqQU8D+tLmSlQCTvPz/V+1D1Fu4/u8vylGwG7T+STNbIzPHrP4slkJVb1uo/0d9Op1G06T8TEeolFZLoPxOBrZ3zcec/qA5MGHZW5j+twBOhNjvlPzy5E4LjKuQ/YIFcTIgl4z9JX2ye+yjiP9KM7M9rP+E/hApCYFNi4D97BZEqrCrfPxeuGTNArt0/V4nSNG9S3D9rVZ5BxRLbP9w3JlEB59k/9XhAckPP2D8s/QmF1M3XP2ema/dI2tY/8e3Y1Rzt1T9YZqW0jA7VP34mEa/lMNQ/d7AANUdR0z/hj3i2/HnSP60pwIUyptE/AnGAU7bT0D+3gpTT4wHQPxGCS1Sga84/EJigUuLazD/T4h3enFfLP9Kj0hix18k/2zCv5gxuyD9/IyevmhLHP0DA0r98xMU/mKfPDwSLxD82pQlzjmPDP3fdQ/u0SMI/r3meAHhNwT+qWqNv5GLAP8qRv+YBFL8/QsnLwfiavT9fVkiAkka8P7k7pvxXIrs/mxrzGo8vuj8dL18A/l+5Pwik6bda3bg/sexUn3SSuD/AfM0oqoi4PwAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[162]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67669&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67668&quot;}},&quot;id&quot;:&quot;67642&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67644&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67648&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67642&quot;}},&quot;id&quot;:&quot;67646&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67664&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67642&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67643&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67644&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67646&quot;}},&quot;id&quot;:&quot;67645&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;KJVBVyRS2z92KJENVZLbP8S74MOF0ts/E08werYS3D9h4n8w51LcP691z+YXk9w//ggfnUjT3D9MnG5TeRPdP5ovvgmqU90/6MINwNqT3T83Vl12C9TdP4XprCw8FN4/03z84mxU3j8iEEyZnZTeP3Cjm0/O1N4/vjbrBf8U3z8Myjq8L1XfP1tdinJgld8/qfDZKJHV3z/8wZTv4ArgP6OLvEr5KuA/SlXkpRFL4D/xHgwBKmvgP5noM1xCi+A/QLJbt1qr4D/ne4MSc8vgP45Fq22L6+A/jkWrbYvr4D+ORatti+vgP+d7gxJzy+A/QLJbt1qr4D+Z6DNcQovgP/EeDAEqa+A/SlXkpRFL4D+ji7xK+SrgP/zBlO/gCuA/qfDZKJHV3z9bXYpyYJXfPwzKOrwvVd8/vjbrBf8U3z9wo5tPztTePyIQTJmdlN4/03z84mxU3j+F6awsPBTePzdWXXYL1N0/6MINwNqT3T+aL74JqlPdP0ycblN5E90//ggfnUjT3D+vdc/mF5PcP2HifzDnUtw/E08werYS3D/Eu+DDhdLbP3YokQ1Vkts/KJVBVyRS2z8olUFXJFLbPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCTeEgBXA0BkJN4SAFcDQPh4NCI3ZANA2p8ZqetvA0CLhm9B1XgDQAMXb1VwfwNALePWcemCA0DdmxcBs4QDQHvPEVVhhQNAuAb78byBA0DESMURvnwDQKK7Lo6pdANAzSajs9VqA0DMel6drVwDQDgaRbahSwNA9rAcZd82A0DYFCWGlB8DQEdMGir6BQNAubRPFkToAkBTpulLUcoCQC7BafVhqAJANUtULUCFAkAMgJT3aGACQCbhsQ/YOQJAUl4tczYQAkA1Sp8foeIBQI7mlSy3sgFAXFJmT/R+AUAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67671&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67670&quot;}},&quot;id&quot;:&quot;67647&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67631&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;NQ/TyKML4T/c2PojvCvhP4OiIn/US+E/K2xK2uxr4T/SNXI1BYzhP3n/mZAdrOE/IMnB6zXM4T/HkulGTuzhP25cEaJmDOI/FSY5/X4s4j+972BYl0ziP2S5iLOvbOI/C4OwDsiM4j+yTNhp4KziP1kWAMX4zOI/AOAnIBHt4j+oqU97KQ3jP09zd9ZBLeM/9jyfMVpN4z+dBseMcm3jP0TQ7ueKjeM/65kWQ6Ot4z+SYz6eu83jPzktZvnT7eM/4PaNVOwN5D+IwLWvBC7kPy+K3QodTuQ/1lMFZjVu5D/WUwVmNW7kP9ZTBWY1buQ/L4rdCh1O5D+IwLWvBC7kP+D2jVTsDeQ/OS1m+dPt4z+SYz6eu83jP+uZFkOjreM/RNDu54qN4z+dBseMcm3jP/Y8nzFaTeM/T3N31kEt4z+oqU97KQ3jPwDgJyAR7eI/WRYAxfjM4j+yTNhp4KziPwuDsA7IjOI/ZLmIs69s4j+972BYl0ziPxUmOf1+LOI/blwRomYM4j/HkulGTuzhPyDJwes1zOE/ef+ZkB2s4T/SNXI1BYzhPytsStrsa+E/g6Iif9RL4T/c2PojvCvhPzUP08ijC+E/NQ/TyKML4T8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxokXJaVsBQPGiRclpWwFAhFu5mfVeAUAVYgxM62ABQIr0k5h6YgFANhMr/U9jAUDjXDXwDmQBQGM2P27DZgFAeUpzY8tsAUCLzkgUXXQBQE2KPfZdfgFAWERlEc+LAUC4wLAdmpwBQP7dzK6RrQFAM6qf2cLDAUC/LIRmotsBQFbVIsGj9AFA1RHBgYYQAkDlL3EO6C0CQEqCnkgNTQJABE3kPbxsAkCKmyNKho4CQCgH1eogrgJAGHi8QqjMAkBhfLkWN+oCQPlhepPoBANABTbGl98cA0BXNHII3DIDQJsGexO4RgNAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67673&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67672&quot;}},&quot;id&quot;:&quot;67652&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67668&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67611&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67649&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67666&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67616&quot;}},&quot;id&quot;:&quot;67615&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67669&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67613&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67654&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67647&quot;}},&quot;id&quot;:&quot;67651&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67670&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67623&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67647&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67648&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67649&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67651&quot;}},&quot;id&quot;:&quot;67650&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67671&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67628&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67653&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67629&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67626&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;}],&quot;root_ids&quot;:[&quot;67682&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"9d25c04b-09f4-482d-912b-bc47b422a63b","root_ids":["67682"],"roots":{"67682":"c7803314-0670-4c3d-824e-7340c016476d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();