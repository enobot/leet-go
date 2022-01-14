/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let nonRepeats = new Set(); 
    let left = 0, right = 0;
    let length = 0;
    
    while (right < s.length) {
        if (nonRepeats.has(s[right])) {
            nonRepeats.delete(s[left]);
            left++;
        } else {
            nonRepeats.add(s[right]);
            right++;
            length = Math.max(length, nonRepeats.size);
        }
        
    }
    
    return length;
};