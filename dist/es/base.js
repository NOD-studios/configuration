import 'source-map-support/register';
import { inject } from 'aurelia-dependency-injection';
import "babel-polyfill";
import path from 'path';
import autobind from 'autobind-decorator';
import { Console } from '@nod/console';
import { Environment } from '@nod/environment';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

@inject('Console', 'Environment')
export class Base {

  get options() {
    return this[PROTECTED].options;
  }

  @autobind
  @param(optional({}))
  @returns(Object)
  setOptions(options = {}) {
    return Object.assign(this[PROTECTED].options, options);
  }

  set options(options = {}) {
    return this.setOptions(options);
  }

  constructor(console, environment) {
    let options = {}, defaults = {}, config = environment.config;

    Object.defineProperty(this, PROTECTED, {
      enumerable : false,
      value      : {
        options : {}
      }
    });

    defaults.base = defaults.base || this.options;
    this.options = defaults;
    this.options = config;
    this.options = { console };
    this.options = options;

    this.options.console.info(`${this.constructor.name}: Initialized.`);
  }
}
