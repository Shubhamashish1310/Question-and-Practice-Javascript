/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function customAbs(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}

var threeSumClosest = function (nums, target) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if ((sum - target) < (closestSum - target)) {
                closestSum = sum;
            }

            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return sum;
            }
        }
    }

    return closestSum;
};

console.log(threeSumClosest([-2,-3,-4,0,1,1], -1));