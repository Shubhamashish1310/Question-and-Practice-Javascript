// let str = "   hello    world   ";
// let result = '';
// str = str.trim();
// let words = str.split(/\s+/);
// for (let i = words.length - 1; i >= 0; i--) {
//     result += words[i] + ' ';
// }
// console.log(result.trim());


function reverseWords(s){
    let res = '';
    let words = s.split(/\s+/);
    for (let i = words.length - 1; i >= 0; i--) {
        res += words[i] + ' ';
    }
    return res.trim();

}

console.log(reverseWords("        shubham is      a goooood boy  "));