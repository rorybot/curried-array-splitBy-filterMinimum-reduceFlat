var assert = require('assert');
const pipeline = require('../pipeline');
const curryable = require("../curryable-functions");
const arr1 = [...Array(100)].map(() => {
  return Math.floor(Math.random() * 9);
});

describe('Pipeline components', ()=>
  describe('arrayChunker', ()=>
    it('number of arrays should equal rounded up length of origianl divided by the interval', () =>
      assert.equal(curryable.arrayChunker(1)(arr1).length, arr1.length / 1 )
    )
  )
)
