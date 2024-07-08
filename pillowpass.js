/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    if(n==time){
            return n+1;
        }
        if(time+1==n){
            return n;
        }

        while(time!=0){
            for(let i =1;i<=n;i++){
                if(time!=0){
                    time--;
                }
                else{
                    return i;
                }
            }
            for(let j=n-1;j>1;j--){
                if(time!=0){
                    time--;
                }
                else{
                    return j;
                }
            }
        }

};

console.log(passThePillow(26,1000));