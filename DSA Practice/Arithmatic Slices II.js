var numberOfArithmeticSlices = function(nums) {
    const memo = new Map();
    
    function dfs(currIdx, diff, memo) {
        const key = `${currIdx}-${diff}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        
        let count = 0;
        for (let i = currIdx + 1; i < nums.length; i++) {
            if (nums[i] - nums[currIdx] === diff) {
                count += 1 + dfs(i, diff, memo);
            }
        }
        
        memo.set(key, count);
        return count;
    }
    
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            total += dfs(j, nums[j] - nums[i], memo);
        }
    }
    
    return total;
};

console.log(numberOfArithmeticSlices([1,2,3,4,5,6]));