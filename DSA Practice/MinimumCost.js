function minimumcost(arr){
    
    let totalsum= 0;
    for(let i in arr){     //n+1
        totalsum += arr[i]   //n
    }
    arr = arr.sort((a,b)=>b-a) //n
    let totalcost=0;
    for(let j in arr){   //n+1
        totalcost+=totalsum //n
        totalsum-=arr[j]    //n
    }
    
    return totalcost
}


console.log(minimumcost([6,4,1,8]));