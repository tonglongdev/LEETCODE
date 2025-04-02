function maximumTripletValue(nums) {
  const n = nums.length;
  if (n < 3) return 0;
  const max_right = new Array(n).fill(0);
  max_right[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    max_right[i] = Math.max(nums[i], max_right[i + 1]);
  }
  let result = 0;
  let max_left = nums[0];
  for (let j = 1; j < n - 1; j++) {
    let temp = (max_left - nums[j]) * max_right[j + 1];
    if (temp > result) {
      result = temp;
    }
    max_left = Math.max(max_left, nums[j]);
  }
  return result;
}

console.log(maximumTripletValue([12, 6, 1, 2, 7]));
