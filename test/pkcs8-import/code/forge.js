'use strict'

const crypto = require('node-forge')
const assert = require('assert')

module.exports = function (a) {
  let key = crypto.pki.decryptRsaPrivateKey(a.pem, a.password)
  assert.notEqual(key, null)
}
