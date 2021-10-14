/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const anagrams = {};
    
    for (const char of s) {
        if(!anagrams[char]) anagrams[char] = 1;
        else anagrams[char]++;
    }
    
    for (const char of t) {
        if(!anagrams[char]) return false;
        anagrams[char]--;
    }
    return true;
};