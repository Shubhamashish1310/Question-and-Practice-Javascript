/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    for(let i =0; i< nums.length;){
        const n = nums[i] -1
        if(nums[i] > 0 && nums[i] < nums.length && nums[n] != nums[i]){
            const temp = nums[n]
            nums[n] = nums[i]
            nums[i] = temp
        }else{
            i++
        }
    }
console.log(nums);
    for(let i =0; i< nums.length; i++){
        if((nums[i]) != i+1){
            return i+1
        }
    }



    return nums.length+1
};

console.log(firstMissingPositive([5,4,2,1,-3]));