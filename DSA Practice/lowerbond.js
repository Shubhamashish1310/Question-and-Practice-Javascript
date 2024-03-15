
// 1 2 2 3 4 5 Lower bond of 2 is 1
function lowerbond(arr,x){
    let n = arr.length
    let left = 0;right=n-1
    let ans = -1

    while(right>=left){
        let mid = Math.floor(left+(right-left)/2)
        // console.log(mid);
        if(arr[mid]<x){
           left = mid+1
        }
        else{
            ans = mid
            right = mid-1
        }

       
    }
    return ans
}

console.log(lowerbond([5,7,7,8,8,10],8));