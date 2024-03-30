function fibonacci(n) {
    let dp = new Array(100005).fill(-1);

    function f(i) {
        if (i === 0 || i === 1) return i; // base case
        if (dp[i] !== -1) return dp[i]; // if value is not -1 we can directly return ans
        // if the above if case doesn't execute, it means subproblem has not been solved
        return dp[i] = f(i - 1) + f(i - 2);
    }

    // return f(n);
    return f(n);
}

console.log(fibonacci(10)); // Example usage: Calculate the 10th Fibonacci number
