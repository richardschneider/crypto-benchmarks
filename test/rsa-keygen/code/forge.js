'use strict'

const crypto = require('node-forge')
const assert = require('assert')

module.exports = function (a) {
  const keypair = crypto.pki.rsa.generateKeyPair({bits: a.bits});
  assert.notEqual(keypair, null)
}
