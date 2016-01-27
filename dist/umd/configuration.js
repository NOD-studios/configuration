(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '@nod/environment', './merger'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('@nod/environment'), require('./merger'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.environment, global.merger);
    global.configuration = mod.exports;
  }
})(this, function (exports, _environment, _merger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Configuration = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Configuration = exports.Configuration = function Configuration() {
    var Merger = arguments.length <= 0 || arguments[0] === undefined ? _merger.Merger : arguments[0];
    var Environment = arguments.length <= 1 || arguments[1] === undefined ? _environment.Environment : arguments[1];

    _classCallCheck(this, Configuration);

    var merger = new Merger(this, new Environment().config);

    Object.assign(this, merger.options);

    return this;
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFHYSx3Q0FFWCxTQUZXLGFBRVgsR0FHRTtRQUZBLDZGQUVBO1FBREEsNEdBQ0E7OzBCQUxTLGVBS1Q7O0FBRUEsUUFBSSxTQUFTLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsSUFBSyxXQUFKLEVBQUQsQ0FBb0IsTUFBcEIsQ0FBMUIsQ0FGSjs7QUFJQSxXQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLE9BQU8sT0FBUCxDQUFwQixDQUpBOztBQU1BLFdBQU8sSUFBUCxDQU5BO0dBSEYiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50IGFzIERlZmF1bHRFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgTWVyZ2VyIGFzIERlZmF1bHRNZXJnZXIgfSBmcm9tICcuL21lcmdlcic7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBNZXJnZXIgPSBEZWZhdWx0TWVyZ2VyLFxuICAgIEVudmlyb25tZW50ID0gRGVmYXVsdEVudmlyb25tZW50XG4gICkge1xuXG4gICAgbGV0IG1lcmdlciA9IG5ldyBNZXJnZXIodGhpcywgKG5ldyBFbnZpcm9ubWVudCgpKS5jb25maWcpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtZXJnZXIub3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
