// QUICK SORT
// function quicksort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot = arr[0]
//     let less = []
//     let greater = []
//     for(let i in arr){
//         if(arr[i]<pivot){
//             less.push(arr[i])
//         }
//         else if(arr[i]>pivot){
//             greater.push(arr[i])
//         }
//     }
//     return [...quicksort(less),pivot,...quicksort(greater)]
// }
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    
    const pivotIndex =  Math.floor(Math.random()*arr.length);
    const pivot = arr[pivotIndex];
    
    // Partition the array into two subarrays: elements less than pivot and elements greater than pivot
    const less = [];
    const greater = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue; 
        }
        if (arr[i] <= pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    
    // Recursive
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

// Example usage:
const arr = [5,4,3,2,1,6];
console.log(quickSort(arr)); 

// function pivot(arr){
//     let piv = Math.random()*arr.length
//     return arr[piv]
// }

//console.log(quicksort([11,10,4,2,1]));