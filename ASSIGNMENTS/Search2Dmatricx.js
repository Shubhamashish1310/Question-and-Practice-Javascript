function guesskaro(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let result = guess(mid);

        if (result === 0) {
            return mid;
        } else if (result === -1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}
function guess(n){
    if (n === 6) {
        return 0;
    }
    else if(n < 6){
        return -1;
    }
    else{
        return 1;
    }
}
console.log(guesskaro(10));