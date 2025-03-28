function memoize(fn) {
  const cache = new Map();
  const RESULT_KEY = Symbol("result");
  return function (...args) {
    let current = cache;
    for (const arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }
      current = current.get(arg);
    }
    if (current.has(RESULT_KEY)) {
      console.log("CACHE");
      return current.get(RESULT_KEY);
    } else {
      console.log("NEW");
      const result = fn(...args);
      current.set(RESULT_KEY, result);
      return result;
    }
  };
}

const exp1 = memoize((a, b) => ({ ...a, ...b }));
exp1({}, {});
exp1({}, {});
