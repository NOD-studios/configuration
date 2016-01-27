import { Environment as DefaultEnvironment } from '@nod/environment';
import { Merger as DefaultMerger } from './merger';

export class Configuration {

  constructor(
    options,
    Merger = DefaultMerger,
    Environment = DefaultEnvironment
  ) {

    let merger = new Merger(this, (new Environment()).config, options);
    Object.assign(this, merger.options);

    return this;
  }
}
