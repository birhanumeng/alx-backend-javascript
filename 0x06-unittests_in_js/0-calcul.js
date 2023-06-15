module.exports = function calculateNumber(a, b = 0) {
  const num_a = Number(a);
  const num_b = Number(b);
  if (Number.isNaN(num_a) || Number.isNaN(num_b))
    throw TypeError('Parameters must be numbers');
  
    return Math.round(num_a) + Math.round(num_b);
  };
