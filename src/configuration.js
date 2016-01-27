import { Environment as DefaultEnvironment } from '@nod/environment';
import { Merger as DefaultMerger } from './merger';

export class Configuration {

  configured = false;

  constructor(
    options,
    Merger = DefaultMerger,
    Environment = DefaultEnvironment
  ) {

    let merger = new Merger(this, (new Environment()).config, options, {
      configured : true
    });
    Object.assign(this, merger.options);

    return this;
  }
}
