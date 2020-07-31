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
    
      
      
    
      var element = document.getElementById("a0cf868d-8bdc-4646-b05d-25f6c2817441");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a0cf868d-8bdc-4646-b05d-25f6c2817441' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;efd8b402-bcb9-47f5-9753-cd0583c35236&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66651&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66659&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66662&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66704&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66667&quot;},{&quot;id&quot;:&quot;66668&quot;},{&quot;id&quot;:&quot;66669&quot;},{&quot;id&quot;:&quot;66670&quot;},{&quot;id&quot;:&quot;66671&quot;},{&quot;id&quot;:&quot;66672&quot;},{&quot;id&quot;:&quot;66673&quot;},{&quot;id&quot;:&quot;66674&quot;}]},&quot;id&quot;:&quot;66677&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66655&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66675&quot;}},&quot;id&quot;:&quot;66669&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66700&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66660&quot;}},&quot;id&quot;:&quot;66659&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66700&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66686&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66687&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66688&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66690&quot;}},&quot;id&quot;:&quot;66689&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;VaWQoDQJA8D9/k8Hin0AwAgRsEfIIADATgMDphaI/b8q5886GWr9vwojEXJMFv2/lUCL+yuz+r9YR2qsVHX5v0KUgEhlUfm/bvXoZt3Y9r+yDfuTkzH1v8srmtppt/S/pNFtcgNv8r+FXs/ttt7xv1rDpLPahvC/yfFY2JNW779kfsetNdzuv8KvawXuCe6/4eZ80lUX67/xUjnJ7pXpv9AzaV4WfOm/TiCa4gfG6L+bXgCGPQHnvzT731jqaOO/TKr0KEhg4r+BwA5Bmnjhvx7+sC8NdOG/Psx/fXMg4b/xtQOVzXbfv/LjtFgFz96/7UatVNIn2r9X9zcHJDrZv0YYTu/7D9i/aEnItg7Q17+LHSDcmp7Xv0Ks1v4vete/q/0WcPJJ079Me335YH7Rv1n7vHlIQNG/VK8uSTU30b9RRiTpv2vQv9OXA4s4C9C/M0eQyFqoz78thJTDgY7Pv3IjFJIiZ8y/+1GmhAvDyr+7mw5vVwjFv32gEb/f/sK/DYDuouAhwr9Ny4bxAOzAvwYp0IgmU7G/rTvc98BtgL/Gw/5D9WBXPwUt960zk6k/q5iikbZktT+RQjAw0xy5P23pQ9oY27k/kdutwn2wvz9dBUD2QBTBPxzlW3W9vco/+pgQLhNrzD+6dgz+wTvNPx0SE4G5qM8/cQ6HN6AC0D/MPzAq7cfQP/EX5ZFKk9M/b9F+LkjK0z/lG+htlI7VP3qy1csutNY/dzFNA76O1z+qZKau4sDZP/4W8sBH99o/LWUj0acr4T9OLzUffUbhP9GR1+YWn+E/LlzYeUYP4z/Yi3Fcdk/jP79pOCWt6eM/6452iQx75T+czBvIN/3mP/xLJp81P+k/6SKB3+/I6z+hvVyat2zsP4BIi+1y3+w/hQQQruOm7z8lGo899+PvPwbp+H6UaPI/SaSMW8t48j+Yd+IqEazyP9t7VWOKWvQ/qTPEfW2j9D9dufseDP71P3Rrpe/HBPY/cGAMM4S5+D/gfpY2RlX6P3YK9pdNhfo/f6ob7Mqm+z9zkSiYfVr8P4qwpwCboQBAAq93X9+MB0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;VrXevpbt6T8GAmDx6wTvP/Ddn3Bvvu8/WX7+rPQ78T9rDJhi80rxP3tu98bZdPE/tl86Amqm8j9U3MqpVUXzP9+1v1tNV/M/SYWLTJGT9D8neQI2Nmf1PxrqshJLpPU/LhfJRn7I9j++UBiJpBD3P1OeLaaSvPc/jsPpCVsq+D9nII6U8kj4PxAUpX6Effg/SMZgiyo6+T9Eq7FNhJr5PwyzZWj6oPk/7HdZB37O+T9Z6H+esD/6PzMByGnFJfs/bdXC9e1n+z/gT7xv2aH7P3jAE7T8ovs/8AygIOO3+z9CiV9NJhH8P4Jj6VQfJvw/IldqtQW7/D8VARl/u9j8P/c8FoIA/vw/0/YmKf4F/T9P/HukLAz9P3gqJQC6EP0/SyD9scGW/T+WUNDgM9D9P5VgyPD21/0/FiraVhnZ/T82d9sCiPL9PwaNn+6Y/v0/jft2U3oF/j+9t8bjFwf+P8m93taNOf4/4Jq1R89T/j9EFg+Jeq/+P/jlDgQS0P4//xfR9eHd/j9Lk+fwP/H+P7h+uctmdf8/xCMIP5Lv/z/sP1QPdgEAQFruW2cmMwBAY4pG2pJVAEAKwcBMc2QAQKYPaWNsZwBAbrcK98F+AEArALIHoogAQCnfquvt1QBAyIRwmVjjAEC2Y/AP3ukAQJGYCMxF/QBA53B4AyoAAUD9A6PSfgwBQH9RHqk0OQFAF+3ngqQ8AUC+gd5G6VgBQChbvexCawFAF9M04Ot4AUBLZuoqDpwBQHAhD3x0rwFApmwk+nQlAkDqpeajzygCQDry2tziMwJAhgs7z+hhAkB7MY7L7mkCQDgNp6Q1fQJA3dEukWGvAkCUeQP5pt8CQIDJ5LPmJwNAXSTw+x15A0C0l0vzlo0DQBBpsV3umwNAkQDCddz0A0BF47HnfvwDQEI6vh8lmgRAEinj1jKeBEDmnbhKBKsEQPde1ZiiFgVA6gxxX9soBUBX7r4Hg38FQN1a6fsxgQVAHBjDDGEuBkC4n6WNUZUGQJ6C/WVToQZAoOoGu7LpBkBdJApmnxYHQEXYU4DNUAhAgde7r2/GC0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66705&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66704&quot;}},&quot;id&quot;:&quot;66691&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66686&quot;}},&quot;id&quot;:&quot;66690&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66691&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66692&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66693&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66695&quot;}},&quot;id&quot;:&quot;66694&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66702&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66692&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66703&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66668&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66659&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66662&quot;},{&quot;id&quot;:&quot;66666&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66663&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66689&quot;},{&quot;id&quot;:&quot;66694&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66696&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66677&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66651&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66655&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66653&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66657&quot;}},&quot;id&quot;:&quot;66650&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66653&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66691&quot;}},&quot;id&quot;:&quot;66695&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66693&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66676&quot;}},&quot;id&quot;:&quot;66671&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66687&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66657&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66675&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66670&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66696&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66674&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66673&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66660&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66676&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66664&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66688&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66667&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66698&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66664&quot;}},&quot;id&quot;:&quot;66663&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66703&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66702&quot;}},&quot;id&quot;:&quot;66686&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66705&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66663&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66666&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66672&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66698&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;66650&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"efd8b402-bcb9-47f5-9753-cd0583c35236","root_ids":["66650"],"roots":{"66650":"a0cf868d-8bdc-4646-b05d-25f6c2817441"}}];
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