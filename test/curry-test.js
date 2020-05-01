var assert = require('assert');
const pipeline = require('../pipeline');
const arr1 = [...Array(100)].map(() => {
  return Math.floor(Math.random() * 9);
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

console.log(pipeline.findHighestNumberInInterval(arr1, 4,5));
