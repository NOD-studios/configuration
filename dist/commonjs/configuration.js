'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = undefined;

var _environment = require('@nod/environment');

var _merger = require('./merger');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = exports.Configuration = function Configuration() {
  var Merger = arguments.length <= 0 || arguments[0] === undefined ? _merger.Merger : arguments[0];
  var Environment = arguments.length <= 1 || arguments[1] === undefined ? _environment.Environment : arguments[1];

  _classCallCheck(this, Configuration);

  var merger = new Merger(this, new Environment().config);

  Object.assign(this, merger.options);

  return this;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUdhLHdDQUVYLFNBRlcsYUFFWCxHQUdFO01BRkEsNkZBRUE7TUFEQSw0R0FDQTs7d0JBTFMsZUFLVDs7QUFFQSxNQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFpQixJQUFLLFdBQUosRUFBRCxDQUFvQixNQUFwQixDQUExQixDQUZKOztBQUlBLFNBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsT0FBTyxPQUFQLENBQXBCLENBSkE7O0FBTUEsU0FBTyxJQUFQLENBTkE7Q0FIRiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW52aXJvbm1lbnQgYXMgRGVmYXVsdEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBNZXJnZXIgYXMgRGVmYXVsdE1lcmdlciB9IGZyb20gJy4vbWVyZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIE1lcmdlciA9IERlZmF1bHRNZXJnZXIsXG4gICAgRW52aXJvbm1lbnQgPSBEZWZhdWx0RW52aXJvbm1lbnRcbiAgKSB7XG5cbiAgICBsZXQgbWVyZ2VyID0gbmV3IE1lcmdlcih0aGlzLCAobmV3IEVudmlyb25tZW50KCkpLmNvbmZpZyk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG1lcmdlci5vcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
