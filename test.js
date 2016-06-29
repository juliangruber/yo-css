'use strict'

const test = require('tape')
const css = require('.')

test(t => {
  t.equal(css(), '')
  t.equal(css({}), '')
  t.equal(css({ foo: 3 }), 'foo: 3')
  t.equal(css({ foo: 'bar' }), 'foo: bar')
  t.equal(css({ foo: 'bar' }, { foo: 'beep' }), 'foo: beep')
  t.equal(css({ beepBoop: 'bar' }), 'beep-boop: bar')
  t.equal(css({ foo: 'bar', beep: 'boop' }), 'foo: bar; beep: boop')
  t.end()
})

