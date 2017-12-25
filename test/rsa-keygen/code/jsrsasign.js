'use strict'

const crypto = require('jsrsasign').KEYUTIL
const assert = require('assert')

module.exports = function (a) {
  const keypair = crypto.generateKeypair('RSA', a.bits)
  assert.notEqual(keypair, null)
}
