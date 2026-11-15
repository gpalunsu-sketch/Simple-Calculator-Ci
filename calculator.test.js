
const test = require('node:test');
const assert = require('node:assert/strict');

const {
    add,
    subtract,
    multiply,
    divide
} = require('./calculator');

test('Addition 10 + 5 returns 15', () => {
    assert.equal(add(10, 5), 15);
});

test('Subtraction 10 - 5 returns 5', () => {
    assert.equal(subtract(10, 5), 5);
});

test('Multiplication 10 x 5 returns 50', () => {
    assert.equal(multiply(10, 5), 50);
});

test('Division 10 / 5 returns 2', () => {
    assert.equal(divide(10, 5), 2);
});

test('Division by zero throws an error', () => {
    assert.throws(() => divide(10, 0));
});

test('Text input throws an error', () => {
    assert.throws(() => add('abc', 5));
});

test('Subtraction 5 - 10 returns -5 (hasil negatif)', () => {
  assert.equal(subtract(5, 10), -5);
});

test('Multiplication by zero returns 0', () => {
  assert.equal(multiply(7, 0), 0);
});

test('Division 10 / 4 returns 2.5 (hasil desimal)', () => {
  assert.equal(divide(10, 4), 2.5);
});

test('Division by zero shows the correct error message', () => {
  assert.throws(() => divide(10, 0), { message: 'Tidak bisa membagi dengan nol' });
});

test('Divide with text input shows the correct error message', () => {
  assert.throws(() => divide('abc', 2), { message: 'Input harus berupa angka' });
});