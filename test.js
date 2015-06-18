'use strict'

var test = require('tape')
var round = require('./')

test(function (t) {
  t.equal(round(5.12, 1), 5.1, 'reduce precision')
  t.equal(round(1.1, 0), 1, 'no precision')
  t.equal(round(1.123, 10), 1.123, 'extra precision')

  t.throws(round.bind(null, Infinity), /finite number$/)
  t.throws(round.bind(null, 1, 1.1), /non-negative integer$/)
  t.throws(round.bind(null, 1, -1), /non-negative integer$/)

  t.end()
})
