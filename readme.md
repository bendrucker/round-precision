# round-precision [![Build Status](https://travis-ci.org/bendrucker/round-precision.svg?branch=master)](https://travis-ci.org/bendrucker/round-precision)

> Round a number to a specified decimal precision


## Install

```
$ npm install --save round-precision
```


## Usage

```js
var roundPrecision = require('round-precision')
roundPrecision(12.34, 1)
//=> 12.3
```

## API

#### `roundPrecision(value, places)` -> `number`

##### value

*Required*  
Type: `number`

A finite number to round.

##### value

*Required*  
Type: `number`

A non-negative number of integer places.

## License

MIT © [Ben Drucker](http://bendrucker.me)
