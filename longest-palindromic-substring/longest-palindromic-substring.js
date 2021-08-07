/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 1 || s === null) return "";
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        let len1 = isPalindrome(s, i, i);
        let len2 = isPalindrome(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = Math.ceil(i - ((len - 1) / 2 ));
            end = Math.floor(i + (len / 2));
        }

    }
    return s.substring(start, end + 1)
};

function isPalindrome(string, left, right) {
    if (left > right || string === null) return 0;
    
    while (left >= 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
    }
    
    return right - left - 1;
}