var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculation', function () {
  describe('SUM', function () {
    it('return 4', function () {
      chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('return 5', function () {
      chai.expect(calculateNumber('SUM', 1.3, 3)).to.equal(5);
    });
    it('return 5', function () {
      chai.expect(calculateNumber('SUM', 1.5, 3.3)).to.equal(5);
    });
  });

  describe('SUBTRACT', function () {
    it('return 1', function () {
      chai.expect(calculateNumber('SUBTRACT', 5, 4)).to.equal(1);
    });
    it('return -3', function () {
      chai.expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    });
    it('should return 3', function () {
      chai.expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 5', function () {
      chai.expect(calculateNumber('DIVIDE', 9.5, 2)).to.equal(5);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.2', function () {
      chai.expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 0.2', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
