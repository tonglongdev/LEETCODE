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

//Phương pháp 2: Sử Dụng Tính Chất Bitwise OR
var subsetXORSum = function (nums) {
    let bitOr = 0;
    for (let num of nums) {
        bitOr |= num;
    }
    return bitOr * (1 << (nums.length - 1));
};