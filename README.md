# @nod/configuration

Merges [environment config](https://github.com/nod-studios/environment), [default properties](./src/configuration.js) and runtime options.

You can add strict type checking for configuration object parameters with [Merger](./src/merger.js) class.
See below for details.

Supports ES5, ES7, AMD, CommonJS, System and EcmaScript modules.

[![GitHub tag][tag-image]][tag-url]
[![Build status][build-image]][build-url]
[![Dependency Status][david-image]][david-url]
[![Join the chat][gitter-image]][gitter-url]


## Usage:

### Installation:
```
npm install --save @nod/configuration
```

### Examples:

#### Usage :
```javascript
import { Configuration } from '@nod/configuration';

process.env.DUMMY_TEST = 'works';

class ExampleConfiguration extends Configuration {
  //add some default properties
  example = true;
}

let config = new ExampleConfiguration({
  example = false
};

console.log(config.example, config.dummy.test);
//outputs : false, 'works'
```

#### Typesafe :
See [Test](./src/test) for full typesafe usage example.


### Build and develop:
```bash
gulp
#will build and start watching for changes
```
or

```bash
npm run build
npm run watch
```
or

```bash
npm run default
```

Please check other available gulp tasks with:
```bash
gulp -T
```

## TODO:
- Gulp tasks as another dependency
- More detailed inline docs

## Support:
[![Send e-mail][mail-image]][mail-url]
[![Join the chat][gitter-image]][gitter-url]

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://nod.st)
by [NOD studios](http://nod.st)


[logo-image]: ./image/logo.strap.png?raw=true
[repo-url]: https://github.com/NOD-studios/configuration
[david-url]: https://david-dm.org/NOD-studios/configuration
[david-image]: https://david-dm.org/NOD-studios/configuration.svg
[gitter-image]: https://img.shields.io/badge/GITTER-join%20chat-green.svg
[gitter-url]: http://bit.ly/NOD-chat
[mail-image]: https://img.shields.io/badge/send-email-green.svg
[mail-url]: mailto:hey@nod.st
[tag-image]: https://img.shields.io/github/tag/NOD-studios/configuration.svg
[tag-url]: https://github.com/NOD-studios/configuration/tags
[build-image]: https://travis-ci.org/NOD-studios/configuration.svg
[build-url]: https://travis-ci.org/NOD-studios/configuration
