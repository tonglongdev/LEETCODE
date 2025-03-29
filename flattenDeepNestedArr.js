function flatten(arr, n) {
  if (n <= 0) {
    return arr;
  }
  const result = [];
  for (const elem of arr) {
    if (Array.isArray(elem) && n > 0) {
      result.push(...flatten(elem, n - 1));
    } else {
      result.push(elem);
    }
  }
  return result;
}

const nestedArr = [1, 2, 3, [4], [5, [6, 7, [8, 9]]]];
const exp1 = flatten(nestedArr, 3);
console.log(exp1);
