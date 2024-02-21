// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let m = {};
//     for(let i =0;i<nums.length;i++){
//         if(m[nums[i]]){
//             m[nums[i]]+=1;
//         }
//         else{
//              m[nums[i]]=1;
//         }
//     }

//     for(let i =0;i<nums.length;i++){
//         const res = target - nums[i]
//            if(res !== undefined){
//               return [i,m[res]]
//            }
//     }
//     return []
// };

// var twoSum = function(nums, target) {
//     let m = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (m[nums[i]]) {
//             m[nums[i]] += 1;
//         } else {
//             m[nums[i]] = 1;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (m[complement] !== undefined) {
//             return [i, m[complement]];
//         }
//     }

//     return []; // No valid pair found
// };

// console.log(twoSum([3,2,4], 6)); // Outputs: [0, 1] (nums[0] + nums[1] = 9)



var twoSum = function(nums, target) {
    const m = {};

    for (let i = 0; i < nums.length; i++) {
        const com = target - nums[i];

        if (m[com] !== undefined) {
            return [m[com], i];
        }

       freqMap[nums[i]] = i;
    }

    return []; // No valid pair found
};

console.log(twoSum([3, 2, 4], 6)); // Outputs: [1, 2] (nums[1] + nums[2] = 6)
