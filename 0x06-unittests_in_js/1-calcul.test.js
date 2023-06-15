const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./1-calcul');

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';
const INVALID = 'INVALID';

describe('basic calculattion', () => {
  describe('SUM', () => {
    it('addition', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber(SUM, 1.4, 5), 6);
      assert.strictEqual(calculateNumber(SUM, 1.7, -2), 0);
      assert.strictEqual(calculateNumber(SUM, 3.8), 4);
      assert.strictEqual(calculateNumber(SUM, 1.2), 1);
    });
  });

  describe('SUBTRACT', () => {
    it('substrction', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber(SUBTRACT, 2, 2), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 10.2, 9.8), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 8.6, 4), 5);
    });
  });

  describe('DIVIDE', () => {
    it('division', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber(DIVIDE, 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber(DIVIDE, 2, 5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, -5), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 0, 3.6), 0);
    });
  });

  describe('invalid type', () => {
    it('throw error', () => {
      assert.throws(() => calculateNumber(INVALID, 5.7, 4.6), {
        message:
          'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      });
    });
  });
});
