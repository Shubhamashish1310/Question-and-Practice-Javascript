
var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if (mid % 2 === 1) {
            mid--; // Ensure mid is even
        }
        if (nums[mid] !== nums[mid + 1]) {
            high = mid;
        } else {
            low = mid + 2;
        }
    }
console.log(nums[high]);
    return nums[low];
   
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11]));