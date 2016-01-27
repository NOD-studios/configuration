(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'autobind-decorator', 'decorate-this'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('autobind-decorator'), require('decorate-this'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.autobindDecorator, global.decorateThis);
    global.merger = mod.exports;
  }
})(this, function (exports, _autobindDecorator, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Merger = undefined;

  var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
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

  var _dec, _dec2, _dec3, _desc, _value, _class;

  var PROTECTED = Symbol(PROTECTED);
  var Merger = exports.Merger = (_dec = (0, _decorateThis.returns)(Object), _dec2 = (0, _decorateThis.param)(Object), _dec3 = (0, _decorateThis.returns)(Object), (_class = function () {
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
  }(), (_applyDecoratedDescriptor(_class.prototype, 'getOptions', [_autobindDecorator2.default, _dec], Object.getOwnPropertyDescriptor(_class.prototype, 'getOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
  exports.default = Merger;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFLYSxrQ0FHViwyQkFBUSxNQUFSLFdBVUEseUJBQU0sTUFBTixXQUNBLDJCQUFRLE1BQVI7aUJBZFU7O21DQUlFO0FBQ1gsZUFBTyxLQUFLLFNBQUwsRUFBZ0IsT0FBaEIsQ0FESTs7OzttQ0FXWTtZQUFkLGdFQUFVLGtCQUFJOztBQUN2QixlQUFPLE9BQU8sTUFBUCxDQUFjLEtBQUssU0FBTCxFQUFnQixPQUFoQixFQUF5QixPQUF2QyxDQUFQLENBRHVCOzs7OzBCQVBYO0FBQ1osZUFBTyxLQUFLLFVBQUwsRUFBUCxDQURZOzswQkFXWTtZQUFkLGdFQUFVLGtCQUFJOztBQUN4QixlQUFPLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUFQLENBRHdCOzs7O0FBSTFCLGFBdkJXLE1BdUJYLEdBQXdCOzs7NEJBdkJiLFFBdUJhOztBQUN0QixhQUFPLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsU0FBNUIsRUFBdUM7QUFDckMsb0JBQWEsS0FBYjtBQUNBLGVBQWE7QUFDWCxtQkFBVSxFQUFWO1NBREY7T0FGRixFQURzQjs7d0NBQVQ7O09BQVM7O0FBUXRCLGNBQVEsT0FBUixDQUFnQixVQUFDLE1BQUQsRUFBWTtBQUMxQixjQUFLLE9BQUwsR0FBZSxNQUFmLENBRDBCO09BQVosQ0FBaEIsQ0FSc0I7O0FBWXRCLGFBQU8sSUFBUCxDQVpzQjtLQUF4Qjs7V0F2Qlc7O29CQXVDRSIsImZpbGUiOiJtZXJnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woUFJPVEVDVEVEKTtcblxuZXhwb3J0IGNsYXNzIE1lcmdlciB7XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLm9wdGlvbnM7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25zKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldCBvcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVyZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
