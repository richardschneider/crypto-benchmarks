'use strict'

const crypto = require('jsrsasign').KEYUTIL
const assert = require('assert')

module.exports = function (a) {
  const key = crypto.getKey(a.pem, a.password)
  return key
}
