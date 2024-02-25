
//this ap

/**
 * Finds the two indices that add up to the target value in the given array of numbers.
 *
 * @param {Array} nums - the array of numbers
 * @param {number} target - the target value to find
 * @return {Array} the indices of the two numbers that add up to the target value
 */
var twoSum = function(nums, target) {
    
  nums =nums.sort((a,b)=>a-b) //[2,3,4]
  let n = nums.length

    let i = 0
    let j=n-1
    while(j>i){
        if(nums[i]+nums[j]==target){
            return [i,j]
        }
        else if(nums[i]<nums[j]){
            j--;
        }
        else{
            i++
        }
      
    }
}

console.log(twoSum([3,2,4],6));