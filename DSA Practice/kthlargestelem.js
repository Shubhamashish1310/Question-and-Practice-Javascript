// var findKthLargest = function(nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k-1];
// };

// console.log(findKthLargest([3,2,3,1,2,4,5,5,5,6],4));

let lists = [[3,2,1,5,6,4],[3,2,3,1,2,4,5,5,5,6],[3,2,3,1,2,4,5,5,5,6,0]]
for(n of lists){
    for(m of n){
        console.log(m);
    }
}