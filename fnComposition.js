function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}
const fn1 = (a) => a * a;
const fn2 = (a) => a + 1;
const fn3 = (a) => a * 2;
const result = compose([fn1, fn2, fn3]);
console.log(result(2));
