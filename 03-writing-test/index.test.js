const { test } = require('node:test');
const assert = require('node:assert');
const { sum } = require('./index');

test('sum function', (t) => {
  assert.strictEqual(sum(1, 2), 3, '1 + 2 should equal 3');
  assert.strictEqual(sum(-1, -1), -2, '-1 + -1 should equal -2');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(1.5, 1.5), 3, '1.5 + 1.5 should equal 3');
});