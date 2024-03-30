function fibonacci(n) {
    let dp = new Array(100005).fill(-1);
    
    function f_bu(n) {
        dp[0] = 0;
        dp[1] = 1; 
        
        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }

    // return f(n);
    return f_bu(n);
}

console.log(fibonacci(10)); // Example usage: Calculate the 10th Fibonacci number
