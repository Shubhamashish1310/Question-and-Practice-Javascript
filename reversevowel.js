/**
 * @param {string} s
 * @return {string}
 */
function isvowel(ch){
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
        return true
    }
    else{
        return false
    }
 }
var reverseVowels = function(s) {
    let n = s.length;
    let i =0
    let j =n-1
    while(i<j){
        if(isvowel(s[i])&&isvowel(s[j])){
            // Swapping the characters
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
        else if(isvowel(s[i])){
            j--;
        }
        else if(isvowel(s[j])){
            i++;
        }
        else{
            i++;
            j--;
        }
    }
    return s
};

console.log(reverseVowels("hello"));