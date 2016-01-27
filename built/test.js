var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Configuration, Merger } from './index';
import { param, returns, Optional as optional } from 'decorate-this';
var ExampleConfiguration = (function (_super) {
    __extends(ExampleConfiguration, _super);
    function ExampleConfiguration(options) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //add some default properties
        this.example = true;
        this.dummy = 'should check this for string';
        var parent = _super.apply(this, [options].concat(args));
        return Object.assign(this, parent, options);
    }
    return ExampleConfiguration;
})(Configuration);
var ExampleMerger = (function (_super) {
    __extends(ExampleMerger, _super);
    function ExampleMerger() {
        _super.apply(this, arguments);
    }
    ExampleMerger.prototype.setOptions = function (options) {
        if (options === void 0) { options = {}; }
        return _super.prototype.setOptions.call(this, options);
    };
    __decorate([
        param(optional({
            example: optional(Boolean),
            dummy: optional(String)
        })),
        returns(Object), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ExampleMerger.prototype, "setOptions", null);
    return ExampleMerger;
})(Merger);
var config = new ExampleConfiguration({
    example: false,
    dummy: 'runtime'
}, ExampleMerger);
var dummy = config.dummy, example = config.example;
console.log({ dummy: dummy, example: example });
