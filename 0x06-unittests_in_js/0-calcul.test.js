const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculattion', () => {
  it('should return sum of integers or round to the above for float', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('when the parametre is string, it should throw TypeError', () => {
    assert.throws(() => calculateNumber('string'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber(1.5, 'string'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
});
