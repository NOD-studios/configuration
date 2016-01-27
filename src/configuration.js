import { Environment as DefaultEnvironment } from '@nod/environment';
import { Merger as DefaultMerger } from './merger';

export class Configuration {

  constructor(
    Merger = DefaultMerger,
    Environment = DefaultEnvironment
  ) {

    let merger = new Merger(this, (new Environment()).config);

    Object.assign(this, merger.options);

    return this;
  }
}
