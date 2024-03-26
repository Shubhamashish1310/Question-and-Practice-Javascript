var findDuplicates = function(nums) {
    let n = nums.length
    let map = {}
    let result =[]

    for(let i =0;i<n;i++){
        if(map[nums[i]]){
            result.push(map[nums[i]])
        }
        else{
            map[nums[i]]=1
        }
    }
return result

};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));