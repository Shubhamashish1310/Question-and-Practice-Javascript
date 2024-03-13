function minimumcost(arr){
    
    let totalsum= 0;
    for(let i in arr){
        totalsum += arr[i]
    }
    
    let totalcost=0;
    for(let j in arr){
        totalcost+=totalsum
        totalsum-=arr[j]
    }
    
    return totalcost
}


console.log(minimumcost([6,4,1]));