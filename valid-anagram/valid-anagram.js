/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let letters = {};
    if (t.length !== s.length) return false;
    
    for (let char of s) {
       letters[char] ? letters[char]++ : letters[char] = 1;
    }
    for (let char of t) {
        if (letters[char]) letters[char]--;
        else return false;
    }
    return true;        
};