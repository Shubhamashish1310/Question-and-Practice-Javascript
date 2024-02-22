

// var threeSum = function (nums) {

//     nums.sort((x,y)=>x-y)
//     let n = nums.length;
//     c = 0;
//     j = n - 1;
//     i = 1
//     while (c < n) {
//         if (nums[i] + nums[j] == -c) {
//             return [nums[i], nums[j], nums[c]]
//         }
//         else if (nums[i] + nums[j] > -c) {
//             j--;
//         }
//         else{
//             i--
//         }
//         c++
//     }
// };

// console.log(threeSum([-1,0,1,2,-1,-4]));