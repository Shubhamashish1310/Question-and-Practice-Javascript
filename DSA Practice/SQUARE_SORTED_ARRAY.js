var sortedSquares = function(nums) {
    let n = nums.length
let sq =[]
    for(let i =0;i<n;i++){
       sq.push(nums[i]**2) //nums[i]**2
       
    }

    sq.sort((a,b)=>a-b)
    return sq
};

console.log(sortedSquares([-4,-1,0,3,10]));