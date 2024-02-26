/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr =[]
    let n = nums.length
    nums.sort((a,b)=>a-b);
    for(let i =0;i<n;i++){
        if(i>0&&nums[i]==nums[i-1]){
            continue;
        }

        let left =i+1;
        let right = n-1;
        while(right>left){
           let sum = nums[i]+nums[left]+nums[right] ;
           if(sum==0){

               arr.push([nums[i],nums[left],nums[right]]) 
               while(nums[left]==nums[left+1]){
                   left++
               }
               while(nums[right]==nums[right-1]){
                   right--;
               }
           }
           else if(sum>0){
               right--
           }
           else{
               left++
           }
        }
    }
    return arr
};

console.log(threeSum([-1,0,1,2,-1,-4]));