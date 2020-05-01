const curryable = require('./curryable-functions');

const arr1 = [...Array(100)].map(() => {
  return Math.floor(Math.random() * 9);
});

// const arrayChunker = amount => arrayToChunk =>
//   arrayToChunk
//     .map(
//       (num, i) =>
//         (i + amount) % amount == 0 && amount >= 3
//           ? arrayToChunk.slice(i, i + amount)
//           : false
//     )
//     .filter(el => el);


let chunkedArray = curryable.arrayChunker(10)(arr1);
// console.log("curryable", curryable.arrayChunker(10)(arr1));

 // chunkedArray = arrayChunker(10)(arr1);

// const highestVals = limit => array =>
//   array.map(arr => arr.filter(el => el >= limit)).flat();
// const highestValsActual = curryable.highestVals(4)(chunkedArray);

// const reducer = array => array.reduce((el1, el2) => el1 + el2);

const pipe = (...functions) => args =>
  functions.reduce((arg, fn) => fn(arg), args);

exports.finalResult = () => {
  const pipedResult = pipe(curryable.arrayChunker(10), curryable.highestVals(4), curryable.reducer)(arr1);
  return pipedResult;
};
