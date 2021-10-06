/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let longestSubstring = 0;
    let left = 0, right = 0;
    
    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            longestSubstring = Math.max(longestSubstring, charSet.size);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }
    
    return longestSubstring;
};