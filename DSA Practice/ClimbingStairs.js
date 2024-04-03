let dp
function f(n,i){
    if(n==1)return 1;
    if(n==2)return 2;
    if(n<0)return 0
    if(dp[i]!==-1)return dp[i]
let ans =0
    ans = f(n,i+1)+f(n,i+2)

return dp[i] =ans 
}

var climbStairs = function(n) {
    dp = Array(n+1).fill(-1)
    
    return f(n,0)
    
};