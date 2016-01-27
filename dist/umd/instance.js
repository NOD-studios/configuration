(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index);
    global.instance = mod.exports;
  }
})(this, function (exports, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configuration = undefined;
  var configuration = exports.configuration = new _index.Configuration({}, _index.Merger);
  exports.default = configuration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFVyx3Q0FBZ0IseUJBQWtCLEVBQWxCO29CQUNaIiwiZmlsZSI6Imluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgTWVyZ2VyIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBsZXQgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHt9LCBNZXJnZXIpO1xuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
