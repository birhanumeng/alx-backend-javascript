const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

function calculateNumber(type, a, b = 0) {
  let num_a = Number(a);
  let num_b = Number(b);
  if (Number.isNaN(num_a) || Number.isNaN(num_b))
    throw TypeError('Parameters must be numbers or able to coerce to number');

  num_a = Math.round(num_a);
  num_b = Math.round(num_b);
  switch (type) {
    case SUM:
      return num_a + num_b;
    case SUBTRACT:
      return num_a - num_b;
    case DIVIDE:
      if (num_b === 0) return 'ERROR';
      const quotient = num_a / num_b;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      );
  }
}

module.exports = calculateNumber;
