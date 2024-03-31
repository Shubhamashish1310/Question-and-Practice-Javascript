function b (aarr){
    let n = aarr.length

    let low =0
    let high = n-1

    while(low<=high){

        let mid = Math.floor(low+(high-low)/2)

        if(aarr[mid]>aarr[mid+1]){

            high = mid-1

        }
        
        else if(aarr[mid]<aarr[mid+1]){

            low = mid+1
        }
    }

    return low

}///

console.log(b([4,5,6,7,0,1,2]));
    
