'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _desc, _value, _class2;

var _configuration = require('./configuration');

var _merger = require('./merger');

var _decorateThis = require('decorate-this');

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  //add some default properties

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

//add some more configuration on the fly
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7Ozs7Ozs7Ozs7OztrTkFFSixVQUFVLFlBQ1YsYUFBYTs7OztTQUhUOzs7SUFNQSx3QkFFSCx5QkFBTSw0QkFBUztBQUNkLFdBQVUsNEJBQVMsT0FBVCxDQUFWO0FBQ0EsY0FBZSw0QkFBUyxNQUFULENBQWY7Q0FGSyxDQUFOLFdBSUEsMkJBQVEsTUFBUjtZQU5HOzs7Ozs7Ozs7O2lDQU9xQjtVQUFkLGdFQUFVLGtCQUFJOztBQUN2Qix3Q0FSRSx5REFRc0IsUUFBeEIsQ0FEdUI7Ozs7U0FQckI7OztBQWFOLElBQUksU0FBUyxJQUFJLG9CQUFKLENBQXlCLGFBQXpCLENBQVQ7OztBQUdKLFNBQVMsSUFBSSxhQUFKLENBQWtCLE1BQWxCLEVBQTBCO0FBQ2pDLGNBQWEsSUFBYjtBQUNBLGNBQWEsU0FBYjtDQUZPLEVBR04sT0FITTs7Y0FLaUM7SUFBcEM7SUFBWTtJQUFTOztBQUUzQixJQUFJLGVBQWUsU0FBZixFQUEwQjtBQUM1QixRQUFNLElBQUksS0FBSixDQUFVLHlDQUFWLENBQU4sQ0FENEI7Q0FBOUI7O0FBSUEsSUFBSSxZQUFZLElBQVosRUFBa0I7QUFDcEIsUUFBTSxJQUFJLEtBQUosQ0FBVSx5Q0FBVixDQUFOLENBRG9CO0NBQXRCOztBQUlBLElBQUksZUFBZSxJQUFmLEVBQXFCO0FBQ3ZCLFFBQU0sSUFBSSxLQUFKLENBQVUseUNBQVYsQ0FBTixDQUR1QjtDQUF6QiIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgUFJPVEVDVEVEIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IE1lcmdlciB9IGZyb20gJy4vbWVyZ2VyJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jbGFzcyBFeGFtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xuICAvL2FkZCBzb21lIGRlZmF1bHQgcHJvcGVydGllc1xuICBleGFtcGxlID0gdHJ1ZTtcbiAgcGFzc1N0cmluZyA9ICdzaG91bGQgY2hlY2sgdGhpcyBmb3Igc3RyaW5nJztcbn1cblxuY2xhc3MgRXhhbXBsZU1lcmdlciBleHRlbmRzIE1lcmdlciB7XG5cbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBleGFtcGxlIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgcGFzc1N0cmluZyAgIDogb3B0aW9uYWwoU3RyaW5nKVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbn1cblxubGV0IGNvbmZpZyA9IG5ldyBFeGFtcGxlQ29uZmlndXJhdGlvbihFeGFtcGxlTWVyZ2VyKTtcblxuLy9hZGQgc29tZSBtb3JlIGNvbmZpZ3VyYXRpb24gb24gdGhlIGZseVxuY29uZmlnID0gbmV3IEV4YW1wbGVNZXJnZXIoY29uZmlnLCB7XG4gIGNvbmZpZ3VyZWQgOiB0cnVlLFxuICBwYXNzU3RyaW5nIDogJ3J1bnRpbWUnXG59KS5vcHRpb25zO1xuXG5sZXQgeyBwYXNzU3RyaW5nLCBleGFtcGxlLCBjb25maWd1cmVkIH0gPSBjb25maWc7XG5cbmlmIChwYXNzU3RyaW5nICE9PSAncnVudGltZScpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDb25maWd1cmF0aW9uIGRpZCBub3QgY29tcGxldGUgcHJvcGVybHknKTtcbn1cblxuaWYgKGV4YW1wbGUgIT09IHRydWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDb25maWd1cmF0aW9uIGRpZCBub3QgY29tcGxldGUgcHJvcGVybHknKTtcbn1cblxuaWYgKGNvbmZpZ3VyZWQgIT09IHRydWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDb25maWd1cmF0aW9uIGRpZCBub3QgY29tcGxldGUgcHJvcGVybHknKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
