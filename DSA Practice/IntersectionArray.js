var intersection = function(nums1, nums2) {
    const freqMap1 = {};
    const freqMap2 = {};
    
    // Populate frequency map for nums1
    for (const num of nums1) {
        freqMap1[num] = (freqMap1[num] || 0) + 1;
    }
    
    // Populate frequency map for nums2
    for (const num of nums2) {
        freqMap2[num] = (freqMap2[num] || 0) + 1;
    }
    
    const result = [];
    
    // Get array of keys from freqMap1 and iterate over them
    const keys1 = Object.keys(freqMap1);
    for (let k =0;k<keys1.length;k++) {
        // Check if the key exists in freqMap2
        if (nums2[k]) {
            result.push((keys1[k]-"0"));
        }
    }
    
    return result;
};

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // Output: [2]
