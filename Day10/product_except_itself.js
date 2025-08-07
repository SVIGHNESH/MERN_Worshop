// product except itself
// function productExceptSelf(nums) {
//     const n = nums.length;
//     const output = new Array(n).fill(1);

//     let left = 1;
//     for (let i = 1; i < n; i++) {
//         output[i] = output[i - 1] * nums[i - 1];
//     }
//     left = output[n - 1] * nums[n - 1];

//     let right = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         output[i] *= right;
//         right *= nums[i];
//     }

//     return output;
// }

// Example usage:
// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]




let arr  = [1,2,3,4]
