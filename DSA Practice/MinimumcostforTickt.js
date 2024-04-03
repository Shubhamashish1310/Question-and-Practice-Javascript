/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
let daycount;
let costtotal;
let s;
let dp;
function f(amt){
if(amt>daycount[daycount.length-1])return 0
if(dp[amt]!==-2)return dp[amt]
if(!s.has(amt))return f(amt+1)

let ans = Math.min(costtotal[0]+f(1+amt),costtotal[1]+f(7+amt),costtotal[2]+f(30+amt)) //main thing here

return dp[amt]= ans
}

var mincostTickets = function(days, costs) {
 s = new Set(days);
 dp = Array(370).fill(-2)
   daycount = days 
   costtotal= costs
   return f(1)

};

console.log(mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]));