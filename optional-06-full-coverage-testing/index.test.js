const { test } = require('node:test');
const assert = require('node:assert');
const { sum } = require('./index');

test('sum function with positive numbers', (t) => {
  assert.strictEqual(sum(1, 2), 3, '1 + 2 should equal 3');
  assert.strictEqual(sum(10, 20), 30, '10 + 20 should equal 30');
});

test('sum function with negative numbers', (t) => {
  assert.strictEqual(sum(-1, -2), -3, '-1 + -2 should equal -3');
  assert.strictEqual(sum(-10, -20), -30, '-10 + -20 should equal -30');
});

test('sum function with mixed positive and negative numbers', (t) => {
  assert.strictEqual(sum(1, -2), -1, '1 + -2 should equal -1');
  assert.strictEqual(sum(-10, 20), 10, '-10 + 20 should equal 10');
});

test('sum function with zero', (t) => {
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  assert.strictEqual(sum(0, 5), 5, '0 + 5 should equal 5');
  assert.strictEqual(sum(5, 0), 5, '5 + 0 should equal 5');
});

test('sum function with floating point numbers', (t) => {
  assert.strictEqual(sum(1.5, 2.5), 4, '1.5 + 2.5 should equal 4');
  assert.strictEqual(sum(-1.5, -2.5), -4, '-1.5 + -2.5 should equal -4');
  assert.strictEqual(sum(1.5, -2.5), -1, '1.5 + -2.5 should equal -1');
});