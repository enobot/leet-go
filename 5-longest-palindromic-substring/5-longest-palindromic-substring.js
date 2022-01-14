/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0 || s === undefined) return "";
    let start = 0, end = 0;
    
    for (let i = 0; i < s.length; i++) {
        let odd = checkIfPalindrome(s, i, i);
        let even = checkIfPalindrome(s, i, i + 1);
        let length = Math.max(odd, even)
        
        if (length > end - start) {
            start = Math.ceil(i - ((length - 1) / 2));
            end = Math.floor(i + (length / 2));
        }
    }
    
    return s.substring(start, end + 1)
};

var checkIfPalindrome = function(string, left, right) {
    if (string === null || left > right) return 0;
    while (left >= 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
    }
    
    return right - left - 1;
}
