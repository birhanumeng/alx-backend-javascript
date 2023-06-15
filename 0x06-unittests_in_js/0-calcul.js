module.exports = function calculateNumber(a, b = 0) {
  const a = Number(a);
  const b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b))
    throw TypeError('Parameters must be numbers');
  
    return Math.round(a) + Math.round(b);
  };
