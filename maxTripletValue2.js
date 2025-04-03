function maxTripletValue(nums) {
  const n = nums.length;
  if (n < 3) return 0;
  const maxLeft = new Array(n).fill(0);
  maxLeft[0] = nums[0];
  for (let i = 1; i < n; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], nums[i]);
  }
  let maxValue = 0,
    maxRight = 0;
  for (let j = n - 2; j >= 1; j--) {
    maxRight = Math.max(maxRight, nums[j + 1]);
    let currentValue = (maxLeft[j - 1] - nums[j]) * maxRight;
    maxValue = Math.max(maxValue, currentValue);
  }
  return maxValue > 0 ? maxValue : 0;
}

console.log(maxTripletValue([12, 6, 1, 2, 7]));
