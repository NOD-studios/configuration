var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(['./configuration', './merger', 'decorate-this'], function (_configuration, _merger, _decorateThis) {
  'use strict';

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

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

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

  var _dec, _dec2, _desc, _value, _class2;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ExampleConfiguration = function (_Configuration) {
    _inherits(ExampleConfiguration, _Configuration);

    function ExampleConfiguration() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, ExampleConfiguration);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ExampleConfiguration)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.example = true, _this.passString = 'should check this for string', _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ExampleConfiguration;
  }(_configuration.Configuration);

  var ExampleMerger = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
    example: (0, _decorateThis.Optional)(Boolean),
    passString: (0, _decorateThis.Optional)(String)
  })), _dec2 = (0, _decorateThis.returns)(Object), (_class2 = function (_Merger) {
    _inherits(ExampleMerger, _Merger);

    function ExampleMerger() {
      _classCallCheck(this, ExampleMerger);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ExampleMerger).apply(this, arguments));
    }

    _createClass(ExampleMerger, [{
      key: 'setOptions',
      value: function setOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        return _get(Object.getPrototypeOf(ExampleMerger.prototype), 'setOptions', this).call(this, options);
      }
    }]);

    return ExampleMerger;
  }(_merger.Merger), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype)), _class2));
  var config = new ExampleConfiguration(ExampleMerger);
  config = new ExampleMerger(config, {
    configured: true,
    passString: 'runtime'
  }).options;
  var _config = config;
  var passString = _config.passString;
  var example = _config.example;
  var configured = _config.configured;

  if (passString !== 'runtime') {
    throw new Error('Configuration did not complete properly');
  }

  if (example !== true) {
    throw new Error('Configuration did not complete properly');
  }

  if (configured !== true) {
    throw new Error('Configuration did not complete properly');
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJhLGdFQUFVIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBQUk9URUNURUQgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgTWVyZ2VyIH0gZnJvbSAnLi9tZXJnZXInO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNsYXNzIEV4YW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XG4gIC8vYWRkIHNvbWUgZGVmYXVsdCBwcm9wZXJ0aWVzXG4gIGV4YW1wbGUgPSB0cnVlO1xuICBwYXNzU3RyaW5nID0gJ3Nob3VsZCBjaGVjayB0aGlzIGZvciBzdHJpbmcnO1xufVxuXG5jbGFzcyBFeGFtcGxlTWVyZ2VyIGV4dGVuZHMgTWVyZ2VyIHtcblxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIGV4YW1wbGUgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBwYXNzU3RyaW5nICAgOiBvcHRpb25hbChTdHJpbmcpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxufVxuXG5sZXQgY29uZmlnID0gbmV3IEV4YW1wbGVDb25maWd1cmF0aW9uKEV4YW1wbGVNZXJnZXIpO1xuXG4vL2FkZCBzb21lIG1vcmUgY29uZmlndXJhdGlvbiBvbiB0aGUgZmx5XG5jb25maWcgPSBuZXcgRXhhbXBsZU1lcmdlcihjb25maWcsIHtcbiAgY29uZmlndXJlZCA6IHRydWUsXG4gIHBhc3NTdHJpbmcgOiAncnVudGltZSdcbn0pLm9wdGlvbnM7XG5cbmxldCB7IHBhc3NTdHJpbmcsIGV4YW1wbGUsIGNvbmZpZ3VyZWQgfSA9IGNvbmZpZztcblxuaWYgKHBhc3NTdHJpbmcgIT09ICdydW50aW1lJykge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyYXRpb24gZGlkIG5vdCBjb21wbGV0ZSBwcm9wZXJseScpO1xufVxuXG5pZiAoZXhhbXBsZSAhPT0gdHJ1ZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyYXRpb24gZGlkIG5vdCBjb21wbGV0ZSBwcm9wZXJseScpO1xufVxuXG5pZiAoY29uZmlndXJlZCAhPT0gdHJ1ZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyYXRpb24gZGlkIG5vdCBjb21wbGV0ZSBwcm9wZXJseScpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
