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
console.log(reverseString(['s','h','u','b','h','a','m']));
// const a = reverseString([2,3,4,5,6])
// console.log(a);

// bruteforce 
// function reverseString(s) {
//     let n = s.length;
//     let reversed = '';
//     for (let i = n - 1; i >= 0; i--) {
//         reversed += s[i];
//     }
//     return reversed;

// }
// const a =reverseString(['s','h','u','b','h','a','m'])
// console.log(a);


//reverse a string

// function reverseString(arr){
//     let n = arr.length;
//     for(let i =0;i<n/2;i++){
//         let temp = arr[i];
//         arr[i]=arr[n-1-i]
//         arr[n-1-i]=temp
        
//     }
//     return arr
// }
