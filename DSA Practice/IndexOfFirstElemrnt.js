function indexbinary(array){
    let left = 0
    let right = array.length - 1
    let mid = 0
    while(left <= right){
        mid = Math.floor((left+right)/2)
        if(array[mid] === mid){
            left = mid + 1
        }
}
}