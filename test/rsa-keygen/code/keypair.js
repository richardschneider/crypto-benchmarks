'use strict'

const crypto = require('keypair')
const assert = require('assert')

module.exports = function (a) {
  const keypair = new crypto({ bits: a.bits })
  assert.notEqual(keypair, null)
}
