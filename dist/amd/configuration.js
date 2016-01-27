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

    this.configured = false;

    var merger = new Merger(this, new Environment().config, options, {
      configured: true
    });
    Object.assign(this, merger.options);

    return this;
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7TUFHYSx3Q0FJWCxTQUpXLGFBSVgsQ0FDRSxPQURGLEVBSUU7UUFGQSw2RkFFQTtRQURBLDRHQUNBOzswQkFSUyxlQVFUOztTQU5GLGFBQWEsTUFNWDs7QUFFQSxRQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFpQixJQUFLLFdBQUosRUFBRCxDQUFvQixNQUFwQixFQUE0QixPQUE3QyxFQUFzRDtBQUNqRSxrQkFBYSxJQUFiO0tBRFcsQ0FBVCxDQUZKO0FBS0EsV0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixPQUFPLE9BQVAsQ0FBcEIsQ0FMQTs7QUFPQSxXQUFPLElBQVAsQ0FQQTtHQUpGIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudCBhcyBEZWZhdWx0RW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcbmltcG9ydCB7IE1lcmdlciBhcyBEZWZhdWx0TWVyZ2VyIH0gZnJvbSAnLi9tZXJnZXInO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG5cbiAgY29uZmlndXJlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnMsXG4gICAgTWVyZ2VyID0gRGVmYXVsdE1lcmdlcixcbiAgICBFbnZpcm9ubWVudCA9IERlZmF1bHRFbnZpcm9ubWVudFxuICApIHtcblxuICAgIGxldCBtZXJnZXIgPSBuZXcgTWVyZ2VyKHRoaXMsIChuZXcgRW52aXJvbm1lbnQoKSkuY29uZmlnLCBvcHRpb25zLCB7XG4gICAgICBjb25maWd1cmVkIDogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgbWVyZ2VyLm9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
