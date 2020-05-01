exports.arrayChunker = amount => arrayToChunk =>
  arrayToChunk
    .map(
      (num, i) =>
        (i + amount) % amount == 0
          ? arrayToChunk.slice(i, i + amount)
          : false
    )
    .filter(el => el);

exports.highestVals = limit => array =>
  array.map(arr => arr.filter(el => el >= limit)).flat();

exports.reducer = array => array.reduce((el1, el2) => el1 + el2);
