import { Configuration, PROTECTED } from './configuration';
import { Merger } from './merger';
import { param, returns, Optional as optional } from 'decorate-this';

class ExampleConfiguration extends Configuration {
  //add some default properties
  example = true;
  passString = 'should check this for string';
}

class ExampleMerger extends Merger {

  @param(optional({
    example : optional(Boolean),
    passString   : optional(String)
  }))
  @returns(Object)
  setOptions(options = {}) {
    return super.setOptions(options);
  }

}

let config = new ExampleConfiguration(ExampleMerger);

//add some more configuration on the fly
config = new ExampleMerger(config, {
  configured : true,
  passString : 'runtime'
}).options;

let { passString, example, configured } = config;

if (passString !== 'runtime') {
  throw new Error('Configuration did not complete properly');
}

if (example !== true) {
  throw new Error('Configuration did not complete properly');
}

if (configured !== true) {
  throw new Error('Configuration did not complete properly');
}
