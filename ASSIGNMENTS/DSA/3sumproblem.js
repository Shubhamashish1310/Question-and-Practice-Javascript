var threeSum = function (nums) {

    nums.sort((x,y)=>x-y)
    let n = nums.length;
    c = 0;
    j = n - 1;
    i = 1
    while (c < n) {
        if (nums[i] + nums[j] == -c) {
            return [nums[i], nums[j], nums[c]]
        }
        else if (nums[i] + nums[j] > -c) {
            j--;
        }
        else{
            i--
        }
        c++
    }
};

console.log(threeSum([-1,0,1,2,-1,-4]));





var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicate elements
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Outputs: [[-1, -1, 2], [-1, 0, 1]]
