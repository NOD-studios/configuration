'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

require('source-map-support/register');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _console = require('@nod/console');

var _environment = require('@nod/environment');

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var PROTECTED = Symbol('PROTECTED');

var Base = exports.Base = (_dec = (0, _aureliaDependencyInjection.inject)('Console', 'Environment'), _dec2 = (0, _decorateThis.param)((0, _decorateThis.Optional)({})), _dec3 = (0, _decorateThis.returns)(Object), _dec(_class = (_class2 = function () {
  _createClass(Base, [{
    key: 'setOptions',
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return Object.assign(this[PROTECTED].options, options);
    }
  }, {
    key: 'options',
    get: function get() {
      return this[PROTECTED].options;
    },
    set: function set() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.setOptions(options);
    }
  }]);

  function Base(console, environment) {
    _classCallCheck(this, Base);

    var options = {},
        defaults = {},
        config = environment.config;

    Object.defineProperty(this, PROTECTED, {
      enumerable: false,
      value: {
        options: {}
      }
    });

    defaults.base = defaults.base || this.options;
    this.options = defaults;
    this.options = config;
    this.options = { console: console };
    this.options = options;

    this.options.console.info(this.constructor.name + ': Initialized.');
  }

  return Base;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [_autobindDecorator2.default, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype)), _class2)) || _class);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU0sWUFBWSxPQUFPLFdBQVAsQ0FBWjs7SUFHTyw4QkFEWix3Q0FBTyxTQUFQLEVBQWtCLGFBQWxCLFdBUUUseUJBQU0sNEJBQVMsRUFBVCxDQUFOLFdBQ0EsMkJBQVEsTUFBUjtlQVJVOztpQ0FTYztVQUFkLGdFQUFVLGtCQUFJOztBQUN2QixhQUFPLE9BQU8sTUFBUCxDQUFjLEtBQUssU0FBTCxFQUFnQixPQUFoQixFQUF5QixPQUF2QyxDQUFQLENBRHVCOzs7O3dCQVBYO0FBQ1osYUFBTyxLQUFLLFNBQUwsRUFBZ0IsT0FBaEIsQ0FESzs7d0JBV1k7VUFBZCxnRUFBVSxrQkFBSTs7QUFDeEIsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBUCxDQUR3Qjs7OztBQUkxQixXQWpCVyxJQWlCWCxDQUFZLE9BQVosRUFBcUIsV0FBckIsRUFBa0M7MEJBakJ2QixNQWlCdUI7O0FBQ2hDLFFBQUksVUFBVSxFQUFWO1FBQWMsV0FBVyxFQUFYO1FBQWUsU0FBUyxZQUFZLE1BQVosQ0FEVjs7QUFHaEMsV0FBTyxjQUFQLENBQXNCLElBQXRCLEVBQTRCLFNBQTVCLEVBQXVDO0FBQ3JDLGtCQUFhLEtBQWI7QUFDQSxhQUFhO0FBQ1gsaUJBQVUsRUFBVjtPQURGO0tBRkYsRUFIZ0M7O0FBVWhDLGFBQVMsSUFBVCxHQUFnQixTQUFTLElBQVQsSUFBaUIsS0FBSyxPQUFMLENBVkQ7QUFXaEMsU0FBSyxPQUFMLEdBQWUsUUFBZixDQVhnQztBQVloQyxTQUFLLE9BQUwsR0FBZSxNQUFmLENBWmdDO0FBYWhDLFNBQUssT0FBTCxHQUFlLEVBQUUsZ0JBQUYsRUFBZixDQWJnQztBQWNoQyxTQUFLLE9BQUwsR0FBZSxPQUFmLENBZGdDOztBQWdCaEMsU0FBSyxPQUFMLENBQWEsT0FBYixDQUFxQixJQUFyQixDQUE2QixLQUFLLFdBQUwsQ0FBaUIsSUFBakIsbUJBQTdCLEVBaEJnQztHQUFsQzs7U0FqQlciLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuQGluamVjdCgnQ29uc29sZScsICdFbnZpcm9ubWVudCcpXG5leHBvcnQgY2xhc3MgQmFzZSB7XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7fSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0ub3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBzZXQgb3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uc29sZSwgZW52aXJvbm1lbnQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHt9LCBkZWZhdWx0cyA9IHt9LCBjb25maWcgPSBlbnZpcm9ubWVudC5jb25maWc7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlZmF1bHRzLmJhc2UgPSBkZWZhdWx0cy5iYXNlIHx8IHRoaXMub3B0aW9ucztcbiAgICB0aGlzLm9wdGlvbnMgPSBkZWZhdWx0cztcbiAgICB0aGlzLm9wdGlvbnMgPSBjb25maWc7XG4gICAgdGhpcy5vcHRpb25zID0geyBjb25zb2xlIH07XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMub3B0aW9ucy5jb25zb2xlLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
