var sortArray = function(nums) {
    return mergeSort(nums);
  };
  
  function mergetwo(left, right) {
    let n = left.length;
    let m = right.length;
    let result = []; // Create an empty array for results
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (n > i && m > j) {
      if (left[i] < right[j]) {
        result[k] = left[i];
        i++;
        k++;
      } else {
        result[k] = right[j];
        j++;
        k++;
      }
    }
  
    while (m > j) {
      result[k] = right[j];
      k++;
      j++;
    }
    while (n > i) {
      result[k] = left[i];
      k++;
      i++;
    }
    return result; // Return the merged array
  }
  
  function mergehelper(nums, start, end) {
    if (start >= end) {
      return [nums[start]]; // Return an array with single element
    }
    const mid = Math.floor((start + end) / 2);
    const left = mergehelper(nums, mid + 1, end);
    const right = mergehelper(nums, start, mid);
    return mergetwo(left, right);
  }
  
  function mergeSort(array) {
    return mergehelper(array, 0, array.length - 1);
  }
  