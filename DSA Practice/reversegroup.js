 function reverseInGroups(arr, n, k){
        let a = [];
        
         for(let i =k-1;i>=0;i--){
            a.push(arr[i]);
        }
       
        for(let i =n-1;i>=k;i--){
            a.push(arr[i]);
        }
     a.push(13)
        return a
    }


    console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],10,3));