
const arr1 =  [...Array(100)].map(()=>{return Math.floor(Math.random()*9)});
console.log("Oriignal array:", arr1);

const arrayChunker2 = (amount) => (arrayToChunk) => arrayToChunk.map( (num,i) => (i+amount) % amount == 0 && amount >= 3 ? arrayToChunk.slice(i, i+amount) : false  ).filter(el => el)
const chunkedArray = arrayChunker2(10)(arr1)
console.log("Chunked array", chunkedArray)

const highestVals  = (limit) => (array) => array.map( arr => arr.filter( el => el >= limit ) ).flat()
const highestValsActual = highestVals(4)(chunkedArray)

console.log("Highest vals array flattened", highestValsActual)

const reducer = (array) => array.reduce( (el1, el2) => el1 + el2  )
console.log(reducer(highestValsActual))



// const reductionPipeline = (chunkThatArray) => x => (limitAndFlattenThoseArrays(x)) => reduceThemDown(z)
const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

console.log("composed", pipe( arrayChunker2(10), highestVals(4), reducer )(arr1))

// console.log(reductionPipeline(arrayChunker2)(highestVals(3))(reducer))
