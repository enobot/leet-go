/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = "";
    let baseWord = strs[0];
   
    for (let i = 0; i < baseWord.length; i++) {
        let count = 0;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== baseWord[i]) return commonPrefix;
            else count++;
            
        }
        if (count === strs.length - 1) commonPrefix += baseWord[i]
    }
    
    
    return commonPrefix;
};