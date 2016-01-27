'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Merger = undefined;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sWUFBWSxPQUFPLFNBQVAsQ0FBWjs7SUFFTyxrQ0FHViwyQkFBUSxNQUFSLFdBVUEseUJBQU0sTUFBTixXQUNBLDJCQUFRLE1BQVI7ZUFkVTs7aUNBSUU7QUFDWCxhQUFPLEtBQUssU0FBTCxFQUFnQixPQUFoQixDQURJOzs7O2lDQVdZO1VBQWQsZ0VBQVUsa0JBQUk7O0FBQ3ZCLGFBQU8sT0FBTyxNQUFQLENBQWMsS0FBSyxTQUFMLEVBQWdCLE9BQWhCLEVBQXlCLE9BQXZDLENBQVAsQ0FEdUI7Ozs7d0JBUFg7QUFDWixhQUFPLEtBQUssVUFBTCxFQUFQLENBRFk7O3dCQVdZO1VBQWQsZ0VBQVUsa0JBQUk7O0FBQ3hCLGFBQU8sS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQVAsQ0FEd0I7Ozs7QUFJMUIsV0F2QlcsTUF1QlgsR0FBd0I7OzswQkF2QmIsUUF1QmE7O0FBQ3RCLFdBQU8sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQyxrQkFBYSxLQUFiO0FBQ0EsYUFBYTtBQUNYLGlCQUFVLEVBQVY7T0FERjtLQUZGLEVBRHNCOztzQ0FBVDs7S0FBUzs7QUFRdEIsWUFBUSxPQUFSLENBQWdCLFVBQUMsTUFBRCxFQUFZO0FBQzFCLFlBQUssT0FBTCxHQUFlLE1BQWYsQ0FEMEI7S0FBWixDQUFoQixDQVJzQjs7QUFZdEIsV0FBTyxJQUFQLENBWnNCO0dBQXhCOztTQXZCVzs7a0JBdUNFIiwiZmlsZSI6Im1lcmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbChQUk9URUNURUQpO1xuXG5leHBvcnQgY2xhc3MgTWVyZ2VyIHtcblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0ub3B0aW9ucztcbiAgfVxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldE9wdGlvbnMoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXJnZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
