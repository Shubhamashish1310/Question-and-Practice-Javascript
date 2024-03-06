var merge = function(nums1, m, nums2, n) {

    if (m === 0) {
        for (let i = 0; i < n; i++) {
          nums1[i] = nums2[i];
        }
        return nums1;
      }
    let i =m-1
    let j =n-1
    let k = m+n-1
    while(j>=0){
        if(i>0&&nums2[j]>nums1[i]){
            nums1[k]=nums2[j]
            k--
            j--
        }
        else{
            nums1[k]=nums1[i]
            k--
            i--;
        }

        if(i<0){
            nums1[k]=nums2[j]
            k--
            j--
        }
    }
    return nums1
};

console.log(merge([0],0,[1],1));