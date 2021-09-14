/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let results = [];
    let storedAnagrams = {};
    
    for (let str of strs) {
        let sortedAnagram = str.split('').sort().join('');
        
        (!storedAnagrams[sortedAnagram]) ? storedAnagrams[sortedAnagram] = [str] : storedAnagrams[sortedAnagram].push(str);
    }
    
    return Object.values(storedAnagrams);

};