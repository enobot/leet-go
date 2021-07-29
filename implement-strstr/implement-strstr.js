/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let indexOfHaystack = 0;
    
    if (needle.length > haystack.length) return -1;
    while (indexOfHaystack < haystack.length) {
        let index = indexOfHaystack;
        let count = 0;
        if (haystack[index] === needle[count]) {
            while (haystack[index] === needle[count] && index < haystack.length) {
                count++;
                index++;
                if (count === needle.length) return indexOfHaystack;
            }
            
        } indexOfHaystack++;
    }
    
    return needle.length === 0 ? 0 : -1;
};