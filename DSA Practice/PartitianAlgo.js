
// PARTITIAN ALGORITHM or also known as Dutch National Flag Algorithm
function partitianalgo(arr){
    let n = arr.length
    let i =0;j=0;k=n-1; // k is high and j is low
    let pivot = Math.floor(Math.random()*arr.length)
    console.log(pivot);
    while(i<=k){
        if(arr[i]>pivot){    //if elemnt is greater than pivot
            let temp = arr[i]
            arr[i]=arr[k]
            arr[k]=temp
            k--
        }
        else if(arr[i]<pivot){   //if element is less than pivot
            let temp =arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i++
            j++
        }
        else{          //if element is equal to pivot
            i++
        }
    }

return arr
}

console.log(partitianalgo([1,2,3,4,5,6,7,8,9,10]));