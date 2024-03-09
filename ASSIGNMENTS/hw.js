function greatequal(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= x) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

console.log(greatequal([1, 2, 3, 4, 5, 6, 7, 8, 10], 9));