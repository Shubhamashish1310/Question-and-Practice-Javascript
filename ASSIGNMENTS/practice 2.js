
var removeElement = function(nums, val) {
  let n = nums.length
  let k =[0]

  for(let i=0;i<n;i++){
      if(nums[i]!==val){
          k++
      }

  }
  return k
};
console.log(removeElement([3,2,2,3,3],3));

