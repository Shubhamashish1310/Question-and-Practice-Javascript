// function smallerorequalelemt(A, B){
//     function binarySearch(arr, target){
//         let low = 0;
//         let high = arr.length - 1;
//         while(low <= high){
//             let mid = Math.floor((low + high) / 2);
//             if(arr[mid] <= target){
//                 low = mid + 1;
//             } else{
//                 high = mid - 1;
//             }
//         }
//         return low;
//     }

//     return binarySearch(A, B);
// }

// // Test the function
// const A = [1, 2, 3, 4, 5];
// const B = 4;
// console.log(smallerorequalelemt(A, B)); // Output should be 4


function smallerOrEqualElements(A, B) {
    let low = 0;
    let high = A.length - 1;

    // Initialize the result variable
    let count = 0;

    // Binary search to find the count of elements less than or equal to B
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (A[mid] <= B) {
           
            count = mid + 1;
            low = mid + 1; 
        } else {
            high = mid - 1; // Continue searching in the left half
        }
    }

    return count;
}

// Example usage:
const A = [1, 2, 3, 4, 4, 6];
const B = 4;
console.log(smallerOrEqualElements(A, B)); // Output: 4
