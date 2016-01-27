import autobind from 'autobind-decorator';
import { param, returns, Optional as optional } from 'decorate-this';

const PROTECTED = Symbol(PROTECTED);

export class Merger {

  @autobind
  @returns(Object)
  getOptions() {
    return this[PROTECTED].options;
  }

  get options() {
    return this.getOptions();
  }

  @autobind
  @param(Object)
  @returns(Object)
  setOptions(options = {}) {
    return Object.assign(this[PROTECTED].options, options);
  }

  set options(options = {}) {
    return this.setOptions(options);
  }

  constructor(...options) {
    Object.defineProperty(this, PROTECTED, {
      enumerable : false,
      value      : {
        options : {}
      }
    });

    options.forEach((option) => {
      this.options = option;
    });

    return this;
  }
}

export default Merger;
