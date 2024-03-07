var sortArray = function(nums) {
  return mergehelper(nums,0,nums.length-1)

};

function mergetwo(left,right){
   let n =left.length
   let m =right.length
   let result = []
   let i=0;j=0;k=0
   while(n>i&&m>j){
       if(left[i]<right[j]){
           result[k]=left[i]
           i++
           k++;

       }
       else{
           result[k]=right[j]
           j++;
           k++
       }
   }

   while(m>j){
       result[k]=right[j]
       k++
       j++
   }
   while(n>i){
       result[k]=left[i]
       k++
       i++
   }
   return result 
}

function mergehelper(nums,start,end){
   if(start==end){
       return nums[start]
   }
   const mid= Math.floor((start+end)/2);
   const left = mergehelper(nums,mid+1,end)
   const right = mergehelper(nums,start,mid)
   return mergetwo(left,right)
}

console.log(([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]));