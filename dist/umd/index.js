(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './configuration', './merger', 'babel-polyfill', 'source-map-support/register'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./configuration'), require('./merger'), require('babel-polyfill'), require('source-map-support/register'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.configuration, global.merger, global.babelPolyfill, global.register);
    global.index = mod.exports;
  }
})(this, function (exports, _configuration, _merger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Merger = exports.Configuration = undefined;
  exports.Configuration = _configuration.Configuration;
  exports.Merger = _merger.Merger;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFLUztVQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbidcbmltcG9ydCB7IE1lcmdlciB9IGZyb20gJy4vbWVyZ2VyJ1xuXG5leHBvcnQgeyBDb25maWd1cmF0aW9uLCBNZXJnZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
