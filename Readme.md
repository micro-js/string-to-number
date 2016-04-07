
# string-to-number

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert a string into a number.

## Installation

    $ npm install @f/string-to-number

## Usage

```js
var stringToNumber = require('@f/string-to-number')

stringToNumber('1') // => 1
stringToNumber('a') // throws TypeError
```

## API

### stringToNumber(val)

- `val` - val to convert

**Returns:** number or throws TypeError

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/string-to-number.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/string-to-number
[git-image]: https://img.shields.io/github/tag/micro-js/string-to-number.svg?style=flat-square
[git-url]: https://github.com/micro-js/string-to-number
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/string-to-number.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/string-to-number
