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
    
      
      
    
      var element = document.getElementById("31321c3c-34f2-4fb6-b8db-949857bb2417");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '31321c3c-34f2-4fb6-b8db-949857bb2417' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;fbf74700-e6c8-44f4-b956-8fc69120ae82&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65214&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65222&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65243&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65160&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65163&quot;},{&quot;id&quot;:&quot;65167&quot;},{&quot;id&quot;:&quot;65227&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65164&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65216&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65218&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65175&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65152&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65156&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65154&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65158&quot;}},&quot;id&quot;:&quot;65151&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65174&quot;}},&quot;id&quot;:&quot;65170&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65205&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65220&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65165&quot;}},&quot;id&quot;:&quot;65164&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65189&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65165&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65191&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65194&quot;},{&quot;id&quot;:&quot;65198&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65195&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65232&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65237&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65206&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65183&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65187&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65185&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65189&quot;}},&quot;id&quot;:&quot;65182&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65199&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65216&quot;}]},&quot;id&quot;:&quot;65228&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65192&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65168&quot;},{&quot;id&quot;:&quot;65169&quot;},{&quot;id&quot;:&quot;65170&quot;},{&quot;id&quot;:&quot;65171&quot;},{&quot;id&quot;:&quot;65172&quot;},{&quot;id&quot;:&quot;65173&quot;}]},&quot;id&quot;:&quot;65175&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;/Knx0k1ikD9U46WbxCCwP3sUrkfhesQ/6SYxCKwcyj/hehSuR+HKPzvfT42XbsI/8tJNYhBYuT85tMh2vp+qP7gehetRuJ4/nMQgsHJokT/8qfHSTWJQP/yp8dJNYmA//Knx0k1iUD8AAAAAAAAAAPyp8dJNYlA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[15]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65225&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65224&quot;}},&quot;id&quot;:&quot;65213&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65224&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65169&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65151&quot;},{&quot;id&quot;:&quot;65182&quot;}]},&quot;id&quot;:&quot;65234&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65225&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65164&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65167&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65245&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65173&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65251&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65250&quot;}},&quot;id&quot;:&quot;65229&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65174&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65183&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65230&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65231&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65229&quot;}},&quot;id&quot;:&quot;65233&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65250&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65251&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65213&quot;}},&quot;id&quot;:&quot;65217&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65172&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65204&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65152&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65237&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65215&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65213&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65214&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65215&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65217&quot;}},&quot;id&quot;:&quot;65216&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65228&quot;}]},&quot;id&quot;:&quot;65227&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65229&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65230&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65231&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65233&quot;}},&quot;id&quot;:&quot;65232&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65191&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65194&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65220&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65200&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65156&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65203&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65160&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65163&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65185&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65245&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65192&quot;}},&quot;id&quot;:&quot;65191&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65171&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65205&quot;}},&quot;id&quot;:&quot;65201&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65218&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65243&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65196&quot;}},&quot;id&quot;:&quot;65195&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65187&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65199&quot;},{&quot;id&quot;:&quot;65200&quot;},{&quot;id&quot;:&quot;65201&quot;},{&quot;id&quot;:&quot;65202&quot;},{&quot;id&quot;:&quot;65203&quot;},{&quot;id&quot;:&quot;65204&quot;}]},&quot;id&quot;:&quot;65206&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65161&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65168&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65196&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65195&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65198&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65222&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65161&quot;}},&quot;id&quot;:&quot;65160&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65202&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65158&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65154&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;65234&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"fbf74700-e6c8-44f4-b956-8fc69120ae82","root_ids":["65234"],"roots":{"65234":"31321c3c-34f2-4fb6-b8db-949857bb2417"}}];
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