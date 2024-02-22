/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
           if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]  
           } 
        }
    }
    return  nums
};
console.log(sortColors([2,0,1,2,1,0]));