'use strict';

System.register(['autobind-decorator', 'decorate-this'], function (_export, _context) {
  var autobind, param, returns, optional, _createClass, _dec, _dec2, _dec3, _desc, _value, _class, PROTECTED, Merger;

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
    setters: [function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
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

      PROTECTED = Symbol(PROTECTED);

      _export('Merger', Merger = (_dec = returns(Object), _dec2 = param(Object), _dec3 = returns(Object), (_class = function () {
        _createClass(Merger, [{
          key: 'getOptions',
          value: function getOptions() {
            return this[PROTECTED].options;
          }
        }, {
          key: 'setOptions',
          value: function setOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            return Object.assign(this[PROTECTED].options, options);
          }
        }, {
          key: 'options',
          get: function get() {
            return this.getOptions();
          },
          set: function set() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            return this.setOptions(options);
          }
        }]);

        function Merger() {
          var _this = this;

          _classCallCheck(this, Merger);

          Object.defineProperty(this, PROTECTED, {
            enumerable: false,
            value: {
              options: {}
            }
          });

          for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
            options[_key] = arguments[_key];
          }

          options.forEach(function (option) {
            _this.options = option;
          });
          return this;
        }

        return Merger;
      }(), (_applyDecoratedDescriptor(_class.prototype, 'getOptions', [autobind, _dec], Object.getOwnPropertyDescriptor(_class.prototype, 'getOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setOptions', [autobind, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class)));

      _export('Merger', Merger);

      _export('default', Merger);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBb0JhLGdFQUFVOzs7Ozs7Ozs7Z0JBSVQsZ0VBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQUlQIiwiZmlsZSI6Im1lcmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbChQUk9URUNURUQpO1xuXG5leHBvcnQgY2xhc3MgTWVyZ2VyIHtcblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0ub3B0aW9ucztcbiAgfVxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE9wdGlvbnMoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXJnZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
