/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let max =Math.max(...nums)
    let min =Math.min(...nums)
    if(Math.abs(max-min)<=limit)return nums.length;
let c=0;
let i =0;
let j =0
let h=1;
while(j<=nums.length){
    while(Math.abs(nums[i]-nums[j])<=limit){

       c=Math.max(c,j-i+1);
       j++;

      
    }
  
   if(Math.abs(nums[i]-nums[j])>limit){

        i++;
        if(i>j)j=i;

    }
    if(j>=nums.length)break;
    
    
   
}

return h
};
console.log(longestSubarray([8,2,4,7],4));