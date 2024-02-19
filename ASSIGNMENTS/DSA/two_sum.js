var twoSum = function(nums, target) {
    let n = nums.length;
    let i = 0;
    let j = n-1;
    while(i < j) {
        if(nums[i] + nums[j] == target) {
            return [i+1, j+1]; // 0index -> 1index
        }
        else if(nums[i] + nums[j] > target) {
            j--;
        } else {
            i++;
        }
    }
};


var twoSum = function(num, target) {
    let n = num.length;
    let i=0;
    let j=n-1;
    while(i<j){
        if(num[i]==num[j]){
            return i+1,j+1
        }
        else if(num[j]>num[i]){
            j--;
        }
        else{
            i++
        }
    }
}