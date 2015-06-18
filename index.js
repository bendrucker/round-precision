'use strict'

var numberIsFinite = require('is-finite')
var isInteger = require('is-integer')

module.exports = function toPrecision (value, places) {
  if (!numberIsFinite(value)) {
    throw new Error('Value must be a finite number')
  }
  if (!isInteger(places) || places < 0) {
    throw new Error('Precision must be a non-negative integer')
  }
  return parseFloat(value.toFixed(places))
}
