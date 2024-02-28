var removeDuplicates = function(nums) {
    let k = 1; // Index for the next unique element
  
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== nums[i + 1]) {
        nums[k] = nums[i + 1]; // Copy unique element to next position
        k++;
      }
    }
  
    // Return the length of the modified array without duplicates
    return nums;
  };
console.log(removeDuplicates([0,0,1,1,1,1,2,3,4,4])); //output [0,1,2,3,4]


//shubham ashish buys a new laptop stand on 28 feb


