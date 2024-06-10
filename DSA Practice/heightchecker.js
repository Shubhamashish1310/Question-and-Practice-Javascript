var heightChecker = function(heights) {
    let ex=[]
   for(i of heights){
       ex.push(i)
   } 
   ex=ex.sort((a,b)=>a-b)
    let d =0
    for(let i =0;i<heights.length;i++){
        if(ex[i]!=heights[i]){
            d++
        }
    }
    return d
};

console.log(heightChecker([1,1,4,2,1,3]));