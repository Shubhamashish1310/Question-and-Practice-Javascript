var merge = function(nums1,nums2) {
    nums1.concat(nums2)
    return nums1.sort((a,b)=>a-b)
  };

  console.log(merge([1,2,3],[2,5,6]));


