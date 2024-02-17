// https://leetcode.com/problems/two-sum/

let twoSum = function(nums, target) {
    let n = nums.length;
    for(let i = 0; i <= n-2; i++) {
        for(let j = i + 1; j < n; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};


console.log(twoSum([2,3,4,5,6],10));
