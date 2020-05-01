const curryable = require("./curryable-functions");

const pipe = (...functions) => args =>
  functions.reduce((arg, fn) => fn(arg), args);

exports.findHighestNumberInInterval = (array, interval, threshold) => {
  const pipedResult = pipe(
    curryable.arrayChunker(interval),
    curryable.highestVals(threshold),
    curryable.reducer
  )(array);
  return pipedResult;
};
