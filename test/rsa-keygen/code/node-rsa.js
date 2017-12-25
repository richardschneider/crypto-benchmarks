'use strict'

const crypto = require('node-rsa')
const assert = require('assert')

module.exports = function (a) {
  const keypair = new crypto({ b: a.bits })
  assert.notEqual(keypair, null)
}
