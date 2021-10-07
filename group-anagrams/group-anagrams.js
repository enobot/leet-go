/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const storedAnagrams = {};
    
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        
        (!storedAnagrams[sortedStr]) ? storedAnagrams[sortedStr] = [str] : storedAnagrams[sortedStr].push(str)
    }
    
    return Object.values(storedAnagrams);
};