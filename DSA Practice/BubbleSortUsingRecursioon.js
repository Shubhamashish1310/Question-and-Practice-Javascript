function bubblesortusingrecursion(arr){
    let n = arr.length
    if(arr[n-2]<=arr[n-1]){
        return arr
    }
    // let temp = arr[n-1]
    // arr[n-1] = arr[n-2]
    // arr[n-2] = temp
    [arr[n-1],arr[n-2]] = [arr[n-2],arr[n-1]]
    return bubblesortusingrecursion(arr)
    
}

console.log(bubblesortusingrecursion([5,4,3,2,1,0]));