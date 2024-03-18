

function arragecoin(n){

    let high = n ;
    let low=1
    let ans =1
    while(high>=low){
        let mid = Math.floor(low+(high-low)/2)
        if(mid*(mid+1)/2<=n){
            ans = mid
            low = mid+1
        }
        else{
            high = mid-1
        }
    }
    return ans
}

console.log(arragecoin(100));