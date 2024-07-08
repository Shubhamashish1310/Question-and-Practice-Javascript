var threeConsecutiveOdds = function(arr) {
    let n = arr.length;
    for(let i=0;i<n-3;i++){
if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
  return true
}
    }
    return false
};

console.log(threeConsecutiveOdds([2,6,4,1]));