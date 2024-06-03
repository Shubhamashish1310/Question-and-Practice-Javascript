/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n = nums1.length
    let m = nums2.length
    let k = m+n
    let num = nums1.concat(...nums2)
    num= num.sort((a,b)=>a-b)
    if(k%2==0){
       
           let x= num[k/2] +num[k/2-1]
           return x/2
        
    }
    else if(k%2!==0){
       let y = num[Math.floor(k/2)]
       return y
    }

};

console.log(findMedianSortedArrays([1,3],[2]));