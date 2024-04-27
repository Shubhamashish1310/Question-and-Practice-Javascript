var firstUniqChar = function (s) {
    let m = {}
    for (let i of s) {
        if (m[i]==undefined ) {
            m[i]= 1
        }
        else {
            m[i] += 1
        }
    }
    for(let i =0;i<s.length;i++){
        if(m[s[i]]==undefined){
            return i
        }
    }
    return -1
};

console.log(firstUniqChar("leetcode"));