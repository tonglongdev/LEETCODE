const putMarples = (weights, k) => {
  if (k === 1) return 0;
  const arr = [];
  for (let i = 0; i < weights.length - 1; i++) {
    arr.push(weights[i] + weights[i + 1]);
  }
  arr.sort((a, b) => a - b);
  let minSum = 0,
    maxSum = 0;
  for (let i = 0; i < k - 1; i++) {
    minSum += arr[i];
  }
  for (let i = arr.length - (k - 1); i < arr.length; i++) {
    maxSum += arr[i];
  }
  return maxSum - minSum;
};

console.log(putMarples([1, 3, 5, 1], 2));
