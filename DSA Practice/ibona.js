

function f(i) {
    if (i === 0 || i === 1) return i; // base case
    if (dp[i] !== -1) return dp[i]; // if value is not -1 we can directly return ans
    // if the above if case doesn't execute, it means subproblem has not been solved
    return dp[i] = f(i - 1) + f(i - 2);
}

function f_bu(n) {
    dp = new Array(100005).fill(0);
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

function fib(n) {
    // dp = new Array(100005).fill(-1);
    // return f(n);
    return f_bu(n);
}

let dp = new Array(100005).fill(-1);