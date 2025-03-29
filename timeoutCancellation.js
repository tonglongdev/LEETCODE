function cancellable(fn, args, t) {
  const timerId = setTimeout(() => fn(...args), t);
  return function cancelFn() {
    clearTimeout(timerId);
  };
}

cancellable((a, b) => console.log(a + b), [1, 2], 3000);
