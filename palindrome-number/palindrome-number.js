/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let reversedInt = 0;
    let original = x;
    while (x > 0) {
        reversedInt = (reversedInt * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    
    return reversedInt === original ? true : false;
};