function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// 1,1,2,3,5,8
// console.log(fibonacci(6))

function* fibGenerator() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const gen = fibGenerator();
console.log(gen.next().value);
