let dp;

 function f(i){
   
    if(i>=cost.length)return 0
    if(dp[i]!==-2)return dp[i]
    return dp[i]=cost[i]+Math.min(f(i+1),f(i+2))
 }


var minCostClimbingStairs = function(cost) {
    dp = Array(1002).fill(-2)
    return Math.min(f(0),f(1))
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));