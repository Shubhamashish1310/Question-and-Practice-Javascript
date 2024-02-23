var moveZeroes = function(nums) {
    let j = 0;
 for (let i = 0; i < nums.length; i++) {
   if (nums[i] !== 0) {
     // Swap non-zero element with element at index j
     [nums[i], nums[j]] = [nums[j], nums[i]];
     j++;
   }
 }
 return nums
}

console.log(moveZeroes([8,1,0,0,12]));