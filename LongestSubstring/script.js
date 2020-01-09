const lengthOfLongestSubstring = (s) => {
    let maxLength =0;
    let current = 0;
    let hash = {};
    
    if(s.length < 2) {
        return s.length;
    }
    for(let i =0; i < s.length; i++) {
        if(hash[s[i]] == null) {
            current += 1;
            console.log(current)
        } else {
            current = Math.min(i - hash[s[i]], current + 1)
        }
        maxLength = Math.max(maxLength, current);
        hash[s[i]] = i;
    }
    return maxLength;
    
};

console.log(lengthOfLongestSubstring('dkkdkkdkdeieeewlti'))