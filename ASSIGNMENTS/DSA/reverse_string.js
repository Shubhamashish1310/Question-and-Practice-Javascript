// var reverseString = function(s) {
//     let n = s.length;
   
//     for(let i = 0;i<n/2;i++){
//         for(let j=n;j>i;j--){
//             let temp = s[i];
//         s[i] = s[j];
//         s[j] = temp;
// return s
            
//         }
//     }
// };





var reverseString = function(s) {
    let n = s.length;
    let i = 0;
    let j = n-1;
    while(i <= j) {
        // swapping the values
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        // move to the next positions
        i++;
        j--;
      
    }
    return s
};

const a = reverseString([2,3,4,5,6])
console.log(a);


function reverseString(s) {
    let n = s.length;
    let reversed = '';
    for (let i = n - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}