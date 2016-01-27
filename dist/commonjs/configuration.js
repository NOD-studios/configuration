'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = undefined;

var _environment = require('@nod/environment');

var _merger = require('./merger');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = exports.Configuration = function Configuration(options) {
  var Merger = arguments.length <= 1 || arguments[1] === undefined ? _merger.Merger : arguments[1];
  var Environment = arguments.length <= 2 || arguments[2] === undefined ? _environment.Environment : arguments[2];

  _classCallCheck(this, Configuration);

  var merger = new Merger(this, new Environment().config, options);
  Object.assign(this, merger.options);

  return this;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUdhLHdDQUVYLFNBRlcsYUFFWCxDQUNFLE9BREYsRUFJRTtNQUZBLDZGQUVBO01BREEsNEdBQ0E7O3dCQU5TLGVBTVQ7O0FBRUEsTUFBSSxTQUFTLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsSUFBSyxXQUFKLEVBQUQsQ0FBb0IsTUFBcEIsRUFBNEIsT0FBN0MsQ0FBVCxDQUZKO0FBR0EsU0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixPQUFPLE9BQVAsQ0FBcEIsQ0FIQTs7QUFLQSxTQUFPLElBQVAsQ0FMQTtDQUpGIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudCBhcyBEZWZhdWx0RW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcbmltcG9ydCB7IE1lcmdlciBhcyBEZWZhdWx0TWVyZ2VyIH0gZnJvbSAnLi9tZXJnZXInO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyxcbiAgICBNZXJnZXIgPSBEZWZhdWx0TWVyZ2VyLFxuICAgIEVudmlyb25tZW50ID0gRGVmYXVsdEVudmlyb25tZW50XG4gICkge1xuXG4gICAgbGV0IG1lcmdlciA9IG5ldyBNZXJnZXIodGhpcywgKG5ldyBFbnZpcm9ubWVudCgpKS5jb25maWcsIG9wdGlvbnMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgbWVyZ2VyLm9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
