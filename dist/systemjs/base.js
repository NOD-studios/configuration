'use strict';

System.register(['source-map-support/register', 'aurelia-dependency-injection', 'babel-polyfill', 'path', 'autobind-decorator', '@nod/console', '@nod/environment', 'decorate-this'], function (_export, _context) {
  var inject, path, autobind, Console, Environment, param, returns, optional, _createClass, _dec, _dec2, _dec3, _class, _desc, _value, _class2, PROTECTED, Base;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  return {
    setters: [function (_sourceMapSupportRegister) {}, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_babelPolyfill) {}, function (_path) {
      path = _path.default;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_nodConsole) {
      Console = _nodConsole.Console;
    }, function (_nodEnvironment) {
      Environment = _nodEnvironment.Environment;
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      PROTECTED = Symbol('PROTECTED');

      _export('Base', Base = (_dec = inject('Console', 'Environment'), _dec2 = param(optional({})), _dec3 = returns(Object), _dec(_class = (_class2 = function () {
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
          this.options = {
            console: console
          };
          this.options = options;
          this.options.console.info(this.constructor.name + ': Initialized.');
        }

        return Base;
      }(), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [autobind, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype)), _class2)) || _class));

      _export('Base', Base);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXFCYSxnRUFBVTs7Ozs7Ozs7O2dCQUlULGdFQUFVIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJ0Bub2QvY29uc29sZSc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbkBpbmplY3QoJ0NvbnNvbGUnLCAnRW52aXJvbm1lbnQnKVxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0ub3B0aW9ucztcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe30pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbnNvbGUsIGVudmlyb25tZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7fSwgZGVmYXVsdHMgPSB7fSwgY29uZmlnID0gZW52aXJvbm1lbnQuY29uZmlnO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWZhdWx0cy5iYXNlID0gZGVmYXVsdHMuYmFzZSB8fCB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zID0gZGVmYXVsdHM7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnO1xuICAgIHRoaXMub3B0aW9ucyA9IHsgY29uc29sZSB9O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc29sZS5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
