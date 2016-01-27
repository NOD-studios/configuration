'use strict';

System.register(['@nod/environment', './merger'], function (_export, _context) {
  var DefaultEnvironment, DefaultMerger, Configuration;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_nodEnvironment) {
      DefaultEnvironment = _nodEnvironment.Environment;
    }, function (_merger) {
      DefaultMerger = _merger.Merger;
    }],
    execute: function () {
      _export('Configuration', Configuration = function Configuration() {
        var Merger = arguments.length <= 0 || arguments[0] === undefined ? DefaultMerger : arguments[0];
        var Environment = arguments.length <= 1 || arguments[1] === undefined ? DefaultEnvironment : arguments[1];

        _classCallCheck(this, Configuration);

        var merger = new Merger(this, new Environment().config);
        Object.assign(this, merger.options);
        return this;
      });

      _export('Configuration', Configuration);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1JLCtEQUFTO1lBQ1Qsb0VBQWMiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50IGFzIERlZmF1bHRFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgTWVyZ2VyIGFzIERlZmF1bHRNZXJnZXIgfSBmcm9tICcuL21lcmdlcic7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBNZXJnZXIgPSBEZWZhdWx0TWVyZ2VyLFxuICAgIEVudmlyb25tZW50ID0gRGVmYXVsdEVudmlyb25tZW50XG4gICkge1xuXG4gICAgbGV0IG1lcmdlciA9IG5ldyBNZXJnZXIodGhpcywgKG5ldyBFbnZpcm9ubWVudCgpKS5jb25maWcpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtZXJnZXIub3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
