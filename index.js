#!/usr/bin/env node

'use strict'

const Suite = require('benchmarked')
const path = require('path')

const suite = new Suite({
  cwd: path.join(__dirname, 'pbkdf2'),
  fixtures: 'fixtures/*.json',
  code: 'code/*.js',
});

suite.run();
