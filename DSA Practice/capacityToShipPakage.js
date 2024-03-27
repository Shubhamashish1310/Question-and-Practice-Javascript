/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */


function candone(weights,mid,days){
    let tw=0;
    let daysc=0
    for(let num of weights){
        if(tw+num>mid){
            daysc++
            tw=0
        }
        
            tw+=num
        
    }
    daysc++
    return daysc<=days
 }
var shipWithinDays = function(weights, days) {
    let n = weights.length
    let totalweight=0
    let maxweight = Math.max(...weights)

    for(let s of weights){
        totalweight+=s
    }

    let low = maxweight
    let high = totalweight;
let ans = high;
    while(high>=low){
        let mid = low + Math.floor((high - low) / 2);
        if(candone(weights,mid,days)){
            ans =mid
            high=mid-1
        }
        else{
            low = mid+1
        }
    }
    return ans 
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));