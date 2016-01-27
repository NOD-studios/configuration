define(['exports', '@nod/environment', './merger'], function (exports, _environment, _merger) {
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

  var Configuration = exports.Configuration = function Configuration(options) {
    var Merger = arguments.length <= 1 || arguments[1] === undefined ? _merger.Merger : arguments[1];
    var Environment = arguments.length <= 2 || arguments[2] === undefined ? _environment.Environment : arguments[2];

    _classCallCheck(this, Configuration);

    var merger = new Merger(this, new Environment().config, options);
    Object.assign(this, merger.options);

    return this;
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7TUFHYSx3Q0FFWCxTQUZXLGFBRVgsQ0FDRSxPQURGLEVBSUU7UUFGQSw2RkFFQTtRQURBLDRHQUNBOzswQkFOUyxlQU1UOztBQUVBLFFBQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxJQUFYLEVBQWlCLElBQUssV0FBSixFQUFELENBQW9CLE1BQXBCLEVBQTRCLE9BQTdDLENBQVQsQ0FGSjtBQUdBLFdBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsT0FBTyxPQUFQLENBQXBCLENBSEE7O0FBS0EsV0FBTyxJQUFQLENBTEE7R0FKRiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW52aXJvbm1lbnQgYXMgRGVmYXVsdEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBNZXJnZXIgYXMgRGVmYXVsdE1lcmdlciB9IGZyb20gJy4vbWVyZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnMsXG4gICAgTWVyZ2VyID0gRGVmYXVsdE1lcmdlcixcbiAgICBFbnZpcm9ubWVudCA9IERlZmF1bHRFbnZpcm9ubWVudFxuICApIHtcblxuICAgIGxldCBtZXJnZXIgPSBuZXcgTWVyZ2VyKHRoaXMsIChuZXcgRW52aXJvbm1lbnQoKSkuY29uZmlnLCBvcHRpb25zKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG1lcmdlci5vcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
