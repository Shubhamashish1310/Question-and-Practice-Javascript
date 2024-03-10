function bubbleSort(arr, n) {
    if (n === 1) {
        return; // Base case: If array size is 1, return
    }

    let swapped = false;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap adjacent elements
            swapped = true;
        }
    }

    if (!swapped) {
        return; // No swaps in this pass, array is already sorted
    }

    bubbleSort(arr, n - 1); // Recur for the remaining elements
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr, arr.length);

console.log("Sorted array:");
console.log(arr);
