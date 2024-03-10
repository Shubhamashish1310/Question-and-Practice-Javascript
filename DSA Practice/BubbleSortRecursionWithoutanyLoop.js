function bubbleSortRecursive(arr, index1, index2) {
   
if(index1===0){
    return arr
}
if(arr[index1]<arr[index2]){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    bubbleSortRecursive(arr,index1-1,index2-1)

    
}
else{
    bubbleSortRecursive(arr,index1-1,index2)
}
return arr
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];


console.log(bubbleSortRecursive(arr,arr.length-1,arr.length-2));
