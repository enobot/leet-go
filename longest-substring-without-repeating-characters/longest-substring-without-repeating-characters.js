/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hashSet = new Set();
    let longest = 0;
    let a_pointer = 0;
    let b_pointer = 0;

    while (b_pointer < s.length) {
        if (!hashSet.has(s[b_pointer])) {
            hashSet.add(s[b_pointer]);
            b_pointer++;
            longest = Math.max(hashSet.size, longest)
        } else {
            hashSet.delete(s[a_pointer]);
            a_pointer++;
        }
    }
    
    return longest;
};