let nums=[2,3,4,5,6,7,8]
let c =0;
for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        nums[i]=0
    }
    else{
        nums[i]=1
        c++;
    }
}
console.log(nums,c);