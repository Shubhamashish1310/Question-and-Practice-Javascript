
let dp ;

function main(n) {

   
    //basecase
    if(n==0 || n==1 ||n==2){
        return n
    }

    if(dp[n]!=-1){
        return n
    }
    //recursive case
    let ans = main(n-1) + (n-1)*main(n-2)
    return ans
}

function friendpair(n){
dp = Array(1005).fill(-1)
return main(n)
}

console.log(friendpair(4))