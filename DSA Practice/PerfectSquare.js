let dp;
function f(n,c){
  if(n==1)return 1;
  if(n==4)return 1;
  if(n==9)return 1;
  let ans = n 
  if(dp[n]!=-8)return dp[n]
  for(let i of c){
      if(n>=i){
      ans = Math.min(ans,f(n-i))
      }
  }
  return dp[n] =1+ans
}
var numSquares = function(n) {
  let c = [1]
  dp = Array(100005).fill(-8)
  for(let i=2;i<=Math.sqrt(n);i++){
      c.push(i**2)
  }
  return f(n,c)
};

console.log(numSquares(12));
code 1
let dp;
function f(n,c){
  if(n==1)return 1;
  if(n==4)return 1;
  if(n==9)return 1;
 
  let ans = n 
  if(dp[n]!==-8)return dp[n]
  for(let i = 0; i < c.length; i++){
      if(n>=c[i]){
      ans = Math.min(ans,f(n-c[i],c))
      }
  }
  if(ans == n){
    return  dp[n]= n
  }
  return dp[n]=1+ans
}

code 2
let dp;
function f(amt,c){
    if(amt ==1)return 1
    if(amt ==4)return 1
    if(amt ==9)return 1
    if(dp[amt]!==-8)return dp[amt]
    let ans = amt
    
    for (let i = 0; i < c.length; i++) {
        
        if (amt >= c[i]) {  
        ans = Math.min(ans, f((amt - c[i]),c))
        }
    }
    if(ans==amt){
        return dp[amt]= amt
    }
    
  return dp[amt]= ans+1
}