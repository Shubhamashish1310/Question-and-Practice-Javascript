var appendCharacters = function(s, t) {
    let x = 0
   for(let i =0;i<s.length;i++){
    for(let j=i;i<t.length;j++){
        if(s[i]==s[j]){
            break
        }
        else{
            x= x+1  
        }
    }
   }
   return x
};

console.log(appendCharacters("abcd", "abcde"));