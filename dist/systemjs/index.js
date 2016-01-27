'use strict';

System.register(['babel-polyfill', 'source-map-support/register', './configuration', './merger'], function (_export, _context) {
  var Configuration, Merger;
  return {
    setters: [function (_babelPolyfill) {}, function (_sourceMapSupportRegister) {}, function (_configuration) {
      Configuration = _configuration.Configuration;
    }, function (_merger) {
      Merger = _merger.Merger;
    }],
    execute: function () {
      _export('Configuration', Configuration);

      _export('Merger', Merger);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
