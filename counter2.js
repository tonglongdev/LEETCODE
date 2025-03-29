function counter(init) {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init),
  };
}
const exp1 = counter(2);
console.log(exp1.increment());
console.log(exp1.increment());
console.log(exp1.decrement());
console.log(exp1.reset());
