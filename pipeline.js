const curryable = require("./curryable-functions");

const pipe = (...functions) => args =>
  functions.reduce((arg, fn) => fn(arg), args);

exports.findHighestNumberInInterval = (array, interval, threshold) => {
  return pipe(
    curryable.arrayChunker(interval),
    curryable.highestVals(threshold),
    curryable.reducer
  )(array);
};

exports.differentPipe = (array, interval, threshold) =>
  curryable.reducer(
    curryable.highestVals(threshold)(curryable.arrayChunker(interval)(array))
  );
