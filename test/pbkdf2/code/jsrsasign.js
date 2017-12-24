'use strict'

const crypto = require('jsrsasign').CryptoJS
const assert = require('assert')

const hashName = {
  sha1: crypto.algo.SHA1,
  'sha2-256': crypto.algo.SHA256,
  'sha2-512': crypto.algo.SHA512
}

module.exports = function (a) {
  const opts = {
    iterations: a.iterations,
    keySize: a.keySize / 4, // convert bytes to words (32 bits)
    hasher: hashName[a.hash]
  }
  const words = crypto.PBKDF2(a.password, a.salt, opts)
  const dek = crypto.enc.Base64.stringify(words)
  assert.equal(dek, a.expected)
}
