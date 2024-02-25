
//this ap

/**
 * Finds the two indices that add up to the target value in the given array of numbers.
 *
 * @param {Array} nums - the array of numbers
 * @param {number} target - the target value to find
 * @return {Array} the indices of the two numbers that add up to the target value
 */


//this method is used to find twosum elemnt which are acending order or descending order
// var twoSum = function(nums, target) {
    
//   nums =nums.sort((a,b)=>a-b) //[2,3,4]
//   let n = nums.length

//     let i = 0
//     let j=n-1
//     while(j>i){
//         if(nums[i]+nums[j]==target){
//             return [i,j]
//         }
//         else if(nums[i]<nums[j]){
//             j--;
//         }
//         else{
//             i++
//         }
      
//     }
// }

// console.log(twoSum([3,2,4],6));




//SECOND METHOD USING HASH MAP OR FREQUENCY MAPPING

// var twoSum = function(nums, target) {
//     //using hash 
//     let n = nums.length;
//     let hash = {};
//     for(let i=0;i<n;i++){
//         hash[nums[i]] = i;
//     }

//     for(let i=0;i<n;i++){
//         let diff = target - nums[i];
//        if(diff== nums[i] && i!=hash[nums[i]]){
//            return [i,hash[nums[i]]];
//        }
//        else if(diff in hash && i!=hash[diff]){
//            return [i,hash[diff]];
//        }

//     }
// };

// Second method of doing this 
function twoSum(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hash[complement] !== undefined) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
}

console.log(twoSum([3, 2, 4], 6));