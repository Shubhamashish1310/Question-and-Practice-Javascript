function Mergetwosort(nums1,nums2){
  let m = nums1.length
  let n = nums2.length
let result = []
  let i=0,j=0,k=0

  while(i<m && j<n){
      if(nums1[i]<=nums2[j]){
          result[k]=nums1[i]
          i++
          k++
      }
      else{
          result[k]=nums2[j]
          j++
          k++
      }
    }

  while(i<m){
      result[k]=nums1[i]
      i++
      k++

  }

  while(j<n){
      result[k]=nums2[j]
      j++
      k++   

  }


  k=0
  while(k<m+n){
      nums1[k]=result[k]
      k++
  }

  return nums1
}


console.log(Mergetwosort([1,2,3,0,0,0],[2,5,6]));



let arr = []
    let i =0,j=0,k=0
    while(i<m && j<n){
        if(nums1[i]<=nums2[j]){
            arr[k]=nums1[i]
            k++;
            i++
        }
    else{
        arr[k]=nums2[j];
        k++
        j++
    }
    }

    while(j<n){
        arr[k]=nums2[j]
        k++
        j++
    }

    while(i<m){
        arr[k]=nums1[i]
        k++
        i++
    }

    k=0
    while(k<m+n){
        nums1[k]=arr[k]
    
    }
    return nums1