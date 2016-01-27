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
      _export('Configuration', Configuration = function Configuration(options) {
        var Merger = arguments.length <= 1 || arguments[1] === undefined ? DefaultMerger : arguments[1];
        var Environment = arguments.length <= 2 || arguments[2] === undefined ? DefaultEnvironment : arguments[2];

        _classCallCheck(this, Configuration);

        this.configured = false;
        var merger = new Merger(this, new Environment().config, options, {
          configured: true
        });
        Object.assign(this, merger.options);
        return this;
      });

      _export('Configuration', Configuration);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNJLCtEQUFTO1lBQ1Qsb0VBQWMiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50IGFzIERlZmF1bHRFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgTWVyZ2VyIGFzIERlZmF1bHRNZXJnZXIgfSBmcm9tICcuL21lcmdlcic7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcblxuICBjb25maWd1cmVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyxcbiAgICBNZXJnZXIgPSBEZWZhdWx0TWVyZ2VyLFxuICAgIEVudmlyb25tZW50ID0gRGVmYXVsdEVudmlyb25tZW50XG4gICkge1xuXG4gICAgbGV0IG1lcmdlciA9IG5ldyBNZXJnZXIodGhpcywgKG5ldyBFbnZpcm9ubWVudCgpKS5jb25maWcsIG9wdGlvbnMsIHtcbiAgICAgIGNvbmZpZ3VyZWQgOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtZXJnZXIub3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
