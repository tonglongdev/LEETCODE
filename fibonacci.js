function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// 1,1,2,3,5,8
console.log(fibonacci(6))