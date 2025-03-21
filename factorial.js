function factorial(n) {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}
console.log(factorial(4))
// factorial(3) => 3*2*1 = 6
// factorial(4) => 4*3*2*1 = 24
