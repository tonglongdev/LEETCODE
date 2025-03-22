function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}

const sum = (a, b) => a + b;
const onceFn = once(sum);
console.log(onceFn(1, 2));
console.log(onceFn(2, 2));
