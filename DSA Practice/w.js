function smallerorequalelemt(A, B){
    let n = A.length
    let high = n-1
    let low =0;
    count=0;
     while(high>=low){
         let mid = Math.floor(low+(high-low)/2)

         if(A[mid]<=B){
             count++;
             low = mid+1
         }


         else{
             high = mid-1
         }
     }
     return count;
  }

  console.log(smallerorequalelemt([1,2,3,4,5],4));