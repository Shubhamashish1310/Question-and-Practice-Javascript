
var successfulPairs = function (spells, potions, success) {
    let m = spells.length
    let n = potions.length
    potions = potions.sort((a, b) => a - b)
    let count = Array(m).fill(0)
    let ans =-1;

    for (let i = 0; i <m; i++) {
        let high = n - 1
        let low = 0
        while (high >= low) {
          let mid = low+Math.floor((high-low)/2)
          if(spells[i]*potions[mid]>=success){
            ans=mid
             high = mid-1
          }
          else {
            low=mid+1
          }
         

        }
        if(ans==-1){
          count[i]=0
        }
        else{
          count[i]=n-ans
        }
        
        ans=-1
    }
return count
};

console.log(successfulPairs([15,8,19],[38,36,23],328));