/**
 * Imports
 */

var stringToNumber = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should convert numberish strings to numbers', function (t) {
  t.equal(stringToNumber('123'), 123)
  t.equal(stringToNumber('123.123'), 123.123)
  t.end()
})

test('should throw type error if cant convet', function (t) {
  t.throws(_ => {
    stringToNumber('a')
  }, TypeError)
  t.end()
})
