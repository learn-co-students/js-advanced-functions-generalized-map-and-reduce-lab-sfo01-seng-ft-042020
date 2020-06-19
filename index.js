const map = (arr, callback) => arr.map(el => callback(el));

const reduce = (arr, callback, start) => {
  let accumulator = start ? start : arr[0];
  let i = start ? 0 : 1;

  for (; i < arr.length; i++) {
    accumulator = callback(arr[i], accumulator);
  }

  return accumulator;
}
// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])