var fourSum = function(nums, target) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    const triplets = [];
  
    for (let i = 0; i < n - 2; i++) {
      // Skip duplicate i elements
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      for (let j = i + 1; j < n - 1; j++) {
        // Skip duplicate j elements (check both i and j-1)
        if (j > i + 1 && (nums[j] === nums[j - 1] || nums[j] === nums[i])) continue;
  
        let left = j + 1;
        let right = n - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            triplets.push([nums[i], nums[j], nums[left], nums[right]]);
            // Skip duplicates for both left and right pointers
          //   while (left < right && nums[left] === nums[left + 1]) left++;
          //   while (left < right && nums[right] === nums[right - 1]) right--;
          while (nums[left] === nums[left + 1]) left++; // Skip duplicates
                  while (nums[right] === nums[right - 1]) right--; // Skip duplicates
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return triplets;
  };
console.log(object);  