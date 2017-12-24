'use strict'

const crypto = require('pbkdf2')
const assert = require('assert')

const hashName = {
  sha1: 'sha1',
  'sha2-256': 'sha256',
  'sha2-512': 'sha512',
}

module.exports = function (a) {
  let dek = crypto.pbkdf2Sync(
    a.password,
    a.salt,
    a.iterations,
    a.keySize,
    hashName[a.hash])
  dek = dek.toString('base64')
  assert.equal(dek, a.expected)
}
