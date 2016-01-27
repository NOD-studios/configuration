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

  this.configured = false;

  var merger = new Merger(this, new Environment().config, options, {
    configured: true
  });
  Object.assign(this, merger.options);

  return this;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUdhLHdDQUlYLFNBSlcsYUFJWCxDQUNFLE9BREYsRUFJRTtNQUZBLDZGQUVBO01BREEsNEdBQ0E7O3dCQVJTLGVBUVQ7O09BTkYsYUFBYSxNQU1YOztBQUVBLE1BQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxJQUFYLEVBQWlCLElBQUssV0FBSixFQUFELENBQW9CLE1BQXBCLEVBQTRCLE9BQTdDLEVBQXNEO0FBQ2pFLGdCQUFhLElBQWI7R0FEVyxDQUFULENBRko7QUFLQSxTQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLE9BQU8sT0FBUCxDQUFwQixDQUxBOztBQU9BLFNBQU8sSUFBUCxDQVBBO0NBSkYiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50IGFzIERlZmF1bHRFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgTWVyZ2VyIGFzIERlZmF1bHRNZXJnZXIgfSBmcm9tICcuL21lcmdlcic7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcblxuICBjb25maWd1cmVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyxcbiAgICBNZXJnZXIgPSBEZWZhdWx0TWVyZ2VyLFxuICAgIEVudmlyb25tZW50ID0gRGVmYXVsdEVudmlyb25tZW50XG4gICkge1xuXG4gICAgbGV0IG1lcmdlciA9IG5ldyBNZXJnZXIodGhpcywgKG5ldyBFbnZpcm9ubWVudCgpKS5jb25maWcsIG9wdGlvbnMsIHtcbiAgICAgIGNvbmZpZ3VyZWQgOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtZXJnZXIub3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
