function maxcount(arr){
    let n = arr.length
    let pos=0;
    let neg =0;
    let high = n-1;
    let low= 0
    while(high>=low){
        let mid = Math.floor(low+(high-low)/2)
        if(arr[mid]>0){
            pos++
            
        }
    }

}