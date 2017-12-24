'use strict'

const crypto = require('node-forge')
const assert = require('assert')

const hashName = {
  sha1: 'sha1',
  'sha2-256': 'sha256',
  'sha2-512': 'sha512',
}

module.exports = function (a) {
  let dek = crypto.pkcs5.pbkdf2(
    a.password,
    a.salt,
    a.iterations,
    a.keySize,
    hashName[a.hash])
  dek = crypto.util.encode64(dek)
  assert.equal(dek, a.expected)
}
