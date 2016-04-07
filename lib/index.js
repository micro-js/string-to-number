/**
 * Expose stringToNumber
 */

module.exports = stringToNumber

/**
 * stringToNumber
 */

function stringToNumber (val) {
  var num = Number(val)
  if (num === num) return num
  throw new TypeError(`${val} is not a number`)
}
