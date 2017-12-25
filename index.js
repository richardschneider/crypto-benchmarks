#!/usr/bin/env node

'use strict'

const Suite = require('benchmarked')
const path = require('path')
const fs = require('fs')

let tests = fs.readdirSync(path.join(__dirname, 'test'))
// tests = ['rsa-keygen']
tests.forEach(t => {
  const suite = new Suite({
    cwd: path.join(__dirname, 'test', t),
    fixtures: 'fixtures/*.json',
    code: 'code/*.js'
  })

  suite.run()
})
