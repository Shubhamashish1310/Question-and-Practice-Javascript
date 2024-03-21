var findPeakElement = function(nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
  if(nums[0]>nums[1])return nums[0]
  else if(nums[n-1]>nums[n-2])return nums[n-1]
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
  
      if(nums[mid-1]<nums[mid]>nums[mid+1]){
          return nums[mid]
      }
      else if(nums[mid]<nums[mid+1]){
          low=mid+1
      }
      else{
          high=mid-1
      }
  
      }
   
  };

  console.log(findPeakElement([1,2,3,1]));