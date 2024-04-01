/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let dp
function f(amt, c) {
    /**
     * Base case: If amt is negative, we can return the maximum safe integer
     * as we can't make a change for negative amount
     */
    if (amt < 0) {
        return dp[amt] = Number.MAX_SAFE_INTEGER;
    }
    /**
     * Base case: If amt is 0, we can return 0 as we don't need any coins
     * to make 0 amount
     */
    if (amt == 0) {
        return dp[amt] = 0;
    }
    /**
     * If dp[amt] is already calculated, return the value
     */
    if(dp[amt]!=-1)return dp[amt]
    let ans = Number.MAX_SAFE_INTEGER
    /**
     * Iterate over all the coin denominations and calculate the minimum
     * number of coins required to make the change for the current amount
     */
    for (let i = 0; i < c.length; i++) {
        if (amt >= c[i]) { // If the current coin is less than or equal to the amount
            ans = Math.min(ans, f((amt - c[i]),c)) // Calculate the minimum number of coins required to make the change
        }
    }
    /**
     * If no coins can be used to make the change, return the maximum safe integer
     */
    if(ans==Number.MAX_SAFE_INTEGER){
        return dp[amt]= Number.MAX_SAFE_INTEGER
    }
    /**
     * Return the minimum number of coins required to make the change
     * + 1 as we need one more coin of the current denomination to make the change
     */
  return dp[amt]= ans+1
}
var coinChange = function (coins, amount) {
dp = Array(amount +1).fill(-1)
    return f(amount, coins)==Number.MAX_SAFE_INTEGER?-1:f(amount, coins)

};

console.log(coinChange([ 1, 2, 5], 11));