// function selctionsort(arr){
    
//     let n = arr.length
   
//         for(let i=0;i<n;i++){
//             let min = minele(arr,i)
           
//             if(min!==i){
//                 let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//             }
//         }
    
//     return arr
// }

// function minele(arr,i){
//     let mine = i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[mine]){
//             mine = j
//         }
//     }
   
//     return mine

// }
var sortArray = function(nums) {
    let n = nums.length;
    const minele = (arr, start) => {
        let minIndex = start;
        for (let i = start + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        return minIndex;
    };

    for (let i = 0; i < n; i++) {
        let min = minele(nums, i);
        [nums[i], nums[min]] = [nums[min], nums[i]];
    }
    return nums;
};
console.log(sortArray([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]));