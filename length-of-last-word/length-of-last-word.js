/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strings = s.split(' ');
    let end = strings.length - 1;
    
    for (let i = end; i >= 0; i--) {
        if (strings[i].length === 0) continue;
        else return strings[i].length;
    }

    
    return 0;
};