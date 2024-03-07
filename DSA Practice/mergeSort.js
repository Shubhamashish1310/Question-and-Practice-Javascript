function merge(left, right) {
    let i = 0, j = 0, k = 0;
    const m = left.length;
    const n = right.length;
    const result = new Array(m + n); // Create result array with combined length
  
    while (i < m && j < n) {
      if (left[i] <= right[j]) {
        result[k] = left[i];
        k++;
        i++;
      } else {
        result[k] = right[j];
        k++;
        j++;
      }
    }
  
    // Copy remaining elements from left array (if any)
    while (i < m) {
      result[k] = left[i];
      k++;
      i++;
    }
  
    // Copy remaining elements from right array (if any)
    while (j < n) {
      result[k] = right[j];
      k++;
      j++;
    }
  
    return result;
  }
  
  function mergeSortHelper(arr, start, end) {
    if (start === end) {
      return [arr[start]]; // Return an array with single element
    }
  
    const mid = Math.floor((start + end) / 2); // Use Math.floor for integer division
    const left = mergeSortHelper(arr, start, mid);
    const right = mergeSortHelper(arr, mid + 1, end);
    return merge(left, right);
  }
  
  function mergeSort(array) {
    return mergeSortHelper(array, 0, array.length - 1);
  }
  
  // Example usage
  const arr = [-1, 5, -4, -9, 0, 1, 2, -5, -5, 3];
  const sortedArray = mergeSortHelper(arr,0,arr.length-1);
  console.log(sortedArray); // Output: [-9, -5, -5, -4, -1, 0, 1, 2, 3, 5]
  