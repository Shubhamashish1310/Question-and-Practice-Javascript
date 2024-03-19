// var searchRange = function(arr, x) {
//     let n = arr.length
//     let left = 0
//     let right=n-1
//     let ans =[-1,-1]
//     while(right>=left){
//         let mid = Math.floor(left+(right-left)/2)
//         if(arr[mid]<x){
//             left = mid+1
//         }
//         else {
//             ans[0] = mid;
//             right = mid-1
//         }
//     }
//     left = 0
//     right=n-1
//     while (right >= left) {
//         let mid = Math.floor(left + (right - left) / 2);
//         if (arr[mid] <= x) { // Use <= to include the last occurrence
//           ans[1] = mid; // Update last occurrence if found
//           left = mid + 1;
//         } else {
//           right = mid - 1;
//         }
//       }
//     if(ans[0]==-1||ans[1]==-1){
//         return [-1,-1]
//     }
    
//     return ans
// };

// console.log(searchRange([5,7,7,8,8,8],8));

var searchRange = function(arr, x) {
    let n = arr.length;
    let left = 0;
    let right = n - 1;
    let ans = [-1, -1];
  
    
    while (left <= right) {  // Changed from right >= left to left <= right
      let mid = Math.floor(left + (right - left) / 2);
      if (arr[mid] < x) {
        left = mid + 1;
      } else if (arr[mid] > x) {  // Changed from else to else if
        right = mid - 1;
      } else {
        ans[0] = mid; // Update first occurrence if found
        right = mid - 1; // Move right to find the first occurrence (if duplicates exist)
      }
    }
  
    // If x wasn't found, return [-1, -1]
    if (ans[0] === -1) {
      return [-1, -1];
    }
  
    // Reset left and right for finding the last occurrence
    left = 0;
    right = n - 1;
  
    // Use <= for last occurrence search
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (arr[mid] <= x) {
        ans[1] = mid; // Update last occurrence if found
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return ans;
  };

  console.log(searchRange([1,1,2,2,3,4],1));\

  nice
  
  
  
  