
const test = require('node:test');
const assert = require('node:assert/strict');

const {
    add,
    subtract,
    multiply,
    divide
} = require('./calculator');

// Test addition
test('Addition 10 + 5 returns 15', () => {
    assert.equal(add(10, 5), 15);
});

// Test subtraction
test('Subtraction 10 - 5 returns 5', () => {
    assert.equal(subtract(10, 5), 5);
});

// Test multiplication
test('Multiplication 10 x 5 returns 50', () => {
    assert.equal(multiply(10, 5), 50);
});

// Test division
test('Division 10 / 5 returns 2', () => {
    assert.equal(divide(10, 5), 2);
});

// Test division by zero
test('Division by zero throws an error', () => {
    assert.throws(() => divide(10, 0));
});

// Test invalid input
test('Text input throws an error', () => {
    assert.throws(() => add('abc', 5));
});
