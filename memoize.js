function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = args.length === 1 ? args[0] : args.toString();
    if (cache.has(key)) {
      console.log("Memoized from cache " + cache.get(key));
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    console.log("New memoized " + result);
    return result;
  };
}

const sum = (a, b) => a + b;
const checkMemoize = memoize(sum);
checkMemoize(2, 3);
checkMemoize(2, 3);
