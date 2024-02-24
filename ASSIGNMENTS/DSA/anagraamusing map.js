var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const freq = {};

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[s[i]]+=1
    } else {
      freq[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (freq[t[i]] === undefined) {
      return false;
    } else {
      freq[t[i]] -= 1;
      if (freq[t[i]] == 0) {
        delete freq[t[i]];
      }
    }
  }
  return Object.keys(freq).length == 0;
};

console.log(isAnagram("anagram", "nagaram"));
