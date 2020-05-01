var assert = require('assert');
const pipeline = require('../pipeline');
const curryable = require("../curryable-functions");
const arr1 = [...Array(100)].map(() => {
  return Math.floor(Math.random() * 9);
});

describe('Pipeline components', ()=>
  describe('arrayChunker', ()=>
    it('number of arrays should equal rounded up length of origianl divided by the interval', () => {
      let chunkSize = 7;
      assert.equal(
        curryable.arrayChunker(chunkSize)(arr1).length,
        Math.ceil(arr1.length / chunkSize)
      )
    }),
    it('each array size should equal the interval', () => {
      let chunkSize = 7;

      let chunkedArray = curryable.arrayChunker(chunkSize)(arr1);
      let chunkedArrayFiltered = curryable.arrayChunker(chunkSize)(arr1).map( (num) => num == chunkSize );
      assert.equal(chunkedArray.length, chunkedArrayFiltered.length)
    })
  )
)
