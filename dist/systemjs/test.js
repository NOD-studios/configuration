'use strict';

System.register(['./configuration', './merger', 'decorate-this'], function (_export, _context) {
  var Configuration, PROTECTED, Merger, param, returns, optional, _createClass, _get, _dec, _dec2, _desc, _value, _class2, ExampleConfiguration, ExampleMerger, config, _config, passString, example, configured;

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

  return {
    setters: [function (_configuration) {
      Configuration = _configuration.Configuration;
      PROTECTED = _configuration.PROTECTED;
    }, function (_merger) {
      Merger = _merger.Merger;
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

      _get = function get(object, property, receiver) {
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

      ExampleConfiguration = function (_Configuration) {
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
      }(Configuration);

      ExampleMerger = (_dec = param(optional({
        example: optional(Boolean),
        passString: optional(String)
      })), _dec2 = returns(Object), (_class2 = function (_Merger) {
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
      }(Merger), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype)), _class2));
      config = new ExampleConfiguration(ExampleMerger);
      config = new ExampleMerger(config, {
        configured: true,
        passString: 'runtime'
      }).options;
      _config = config;
      passString = _config.passString;
      example = _config.example;
      configured = _config.configured;

      if (passString !== 'runtime') {
        throw new Error('Configuration did not complete properly');
      }

      if (example !== true) {
        throw new Error('Configuration did not complete properly');
      }

      if (configured !== true) {
        throw new Error('Configuration did not complete properly');
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFpQmEsZ0VBQVUiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIFBST1RFQ1RFRCB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBNZXJnZXIgfSBmcm9tICcuL21lcmdlcic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY2xhc3MgRXhhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcbiAgLy9hZGQgc29tZSBkZWZhdWx0IHByb3BlcnRpZXNcbiAgZXhhbXBsZSA9IHRydWU7XG4gIHBhc3NTdHJpbmcgPSAnc2hvdWxkIGNoZWNrIHRoaXMgZm9yIHN0cmluZyc7XG59XG5cbmNsYXNzIEV4YW1wbGVNZXJnZXIgZXh0ZW5kcyBNZXJnZXIge1xuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgZXhhbXBsZSA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIHBhc3NTdHJpbmcgICA6IG9wdGlvbmFsKFN0cmluZylcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG59XG5cbmxldCBjb25maWcgPSBuZXcgRXhhbXBsZUNvbmZpZ3VyYXRpb24oRXhhbXBsZU1lcmdlcik7XG5cbi8vYWRkIHNvbWUgbW9yZSBjb25maWd1cmF0aW9uIG9uIHRoZSBmbHlcbmNvbmZpZyA9IG5ldyBFeGFtcGxlTWVyZ2VyKGNvbmZpZywge1xuICBjb25maWd1cmVkIDogdHJ1ZSxcbiAgcGFzc1N0cmluZyA6ICdydW50aW1lJ1xufSkub3B0aW9ucztcblxubGV0IHsgcGFzc1N0cmluZywgZXhhbXBsZSwgY29uZmlndXJlZCB9ID0gY29uZmlnO1xuXG5pZiAocGFzc1N0cmluZyAhPT0gJ3J1bnRpbWUnKSB7XG4gIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBkaWQgbm90IGNvbXBsZXRlIHByb3Blcmx5Jyk7XG59XG5cbmlmIChleGFtcGxlICE9PSB0cnVlKSB7XG4gIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBkaWQgbm90IGNvbXBsZXRlIHByb3Blcmx5Jyk7XG59XG5cbmlmIChjb25maWd1cmVkICE9PSB0cnVlKSB7XG4gIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBkaWQgbm90IGNvbXBsZXRlIHByb3Blcmx5Jyk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
