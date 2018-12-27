/*
 * Name: altai_autosize
 * Title: Altai Autosize
 * Description: Automatically adjust textarea height to fit text.
 *
 */

// jQuery
var jQuery;

// Autosize
var autosize;

(function($, window, document) {
  $.fn.extend({
    altaiAutosize: function(options) {
      // Variables
      var action, log, settings;
      var object = $(this);

      // Default settings
      settings = {
        debug: false
      };
      settings = $.extend(settings, options);

      // Log
      log = function(message) {
        if (settings.debug) {
          if (typeof((console === "undefined") && (console === null))) {
            return console.log(message);
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      };

      // Action
      action = function() {
        object.each(function() {
          return autosize($(this));
        });
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function() {
          action();
          log("Altai Autosize Activated");
        });
      }
    }
  });
})(jQuery, window, document);
