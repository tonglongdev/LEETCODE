// Phương pháp 1: Duyệt Tất Cả Tập Con (Brute Force)
// var subsetXORSum = function (nums) {
//     let total = 0;

//     function dfs(index, currentXor) {
//         if (index === nums.length) {
//             total += currentXor;
//             return;
//         }
//         dfs(index + 1, currentXor);
//         dfs(index + 1, currentXor ^ nums[index]);
//     }

//     dfs(0, 0);
//     return total;
// };

// =======================
// Binary tree
// dfs(0, 0)
// /         \
// ❌ bỏ 1       ✅ chọn 1
// /                 \
// dfs(1,0)         dfs(1, 1)
// /   \            /    \
// ❌2  ✅2        ❌2    ✅2
// (2,0)(2,2)     (2,1)   (2,3)

// dfs(2, 0) → total += 0
// dfs(2, 3) → total += 3
// dfs(2, 1) → total += 1
// dfs(2, 2) → total += 2
// Tổng cuối cùng: 0 + 3 + 1 + 2 = 6
// =======================

//Phương pháp 2: Sử Dụng Tính Chất Bitwise OR
var subsetXORSum = function (nums) {
  let bitOr = 0;
  for (let num of nums) {
    bitOr |= num;
  }
  // (1 << (nums.length - 1)) => 2^(n - 1)
  return bitOr * (1 << (nums.length - 1));
};
