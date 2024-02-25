var reverseString = function(s) {
    let n = s.length
let i = 0;
while(i<n-1-i){
    let temp = s[i];    
    s[i] = s[n-1-i];
    s[n-1-i] = temp
    i++;
}
return s
}

console.log(reverseString(['s','h','u','b','h','a','m']));