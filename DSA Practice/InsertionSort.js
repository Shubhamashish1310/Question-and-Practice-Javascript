function insertionSort(arr){
    let n = arr.length
    for(let i in arr){
        for(let j=i+1;j<=0;j--){
            if(arr[j]<arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }

        }

    }
    return arr 

}

console.log(insertionSort([5,4,3,2,1,0,-1,-2,-3,-4,-5]));