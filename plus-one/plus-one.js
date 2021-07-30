/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let end = digits.length - 1;
    
    for (let i = end; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else digits[i] = 0;

    }
    
    digits.unshift(1)
    return digits;
};