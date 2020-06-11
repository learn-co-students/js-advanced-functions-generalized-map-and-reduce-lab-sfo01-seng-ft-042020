// Add your functions here
function map(src, fn) {
  let r = [];
  for(let i = 0; i < src.length; i++) {
    r.push(fn(src[i]))
  }
  return r;
}

function reduce(src, fn, start) {
  let r = (!!start) ? start : src[0];
  let i = (!!start) ? 0 : 1

  for(i; i < src.length; i++) {
    r = fn(src[i], r)

  }
  return r
}
