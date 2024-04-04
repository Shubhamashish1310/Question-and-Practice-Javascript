/**
 * @param {number[]} nums
 * @return {number}
 */
let dp;
function f(nums,n){
    if(n==0)return 0
    if(n==1)return nums[0]
    if(dp[n]!=-1)return dp[n]
    return dp[n] = Math.max(f(n-1,n),f(n-2,n)+n)
}
var rob = function(nums) {
   dp = Array(104).fill(-1)
   return f(nums,nums[nums.length-1])
};
console.log(rob([1,2,3,1]));

setTimeout(() => {
    
}, delayInms);