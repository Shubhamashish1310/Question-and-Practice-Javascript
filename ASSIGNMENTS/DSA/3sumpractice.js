//3sum problem

var threeSum = function(nums) {
    let n = nums.length;
    nums.sort((a,b)=>a-b)
   const result = [];

    for(let i =0;i<n-2;i++){
        if(i>0&&nums[i]===nums[i-1]){
            continue;
        }

        left = i+1;
        right= n-1;
        while(right>left){
        const sum = nums[i]+nums[left]+nums[right]

            if(sum===0){
                result.push([nums[i],nums[left],nums[right]])
                while(nums[left]===nums[left+1])left++;
                while(nums[right]===nums[right-1])right--;
                left++;
                right--;
            }
            else if(sum>0){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return result

};
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Outputs: [[-1, -1, 2], [-1, 0, 1]]

