var minOperations = function(nums) {
    let count = 0;
    
    while (true) {
        let smallest = Infinity;
        let foundNonZero = false;
        
        // Find the smallest non-zero element in the array
        for (let num of nums) {
            if (num > 0) {
                foundNonZero = true;
                smallest = Math.min(smallest, num);
            }
        }
        
        // If all elements are zero, exit the loop
        if (!foundNonZero) break;
        
        // Subtract the smallest element from positive elements
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                nums[i] -= smallest;
            }
        }
        
        count++; // Increment operation count
    }
    
    return count;
};

// Test cases
console.log(minOperations([1, 5, 0, 3, 5])); // Output: 3
console.log(minOperations([0])); // Output: 0

