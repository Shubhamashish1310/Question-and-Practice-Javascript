var judgeSquareSum = function(c) {
    let arr=[]
    for(let i =1;i<=Math.sqrt(c**2);i++){
arr.push(i)
    }
let sum =0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        sum=arr[i]**2+arr[j]**2
        if(sum==c){
            return true
        }
        else if(arr[i]**2==c||arr[j]**2==c){
            return true
        }
    }
}
return false
}

console.log(judgeSquareSum(2));