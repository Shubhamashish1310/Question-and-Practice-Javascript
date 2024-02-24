for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[(s[i] += 1)];
    } else {
      freq[s[i]] = 1;
    }
  }