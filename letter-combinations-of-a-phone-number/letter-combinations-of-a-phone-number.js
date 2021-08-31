/**
 * @param {string} digits
 * @return {string[]}
 */
const digitsToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
};

var letterCombinations = function(digits) { 
    const currentWordArr = new Array(digits.length).fill('0');
    let results = [];
    
    letterCombinationHelper(0, digits, currentWordArr, results);
    return results;
};

function letterCombinationHelper(index, digits, currentWordArr, results) {
    if(digits.length === 0) return;
    if (index === digits.length){
        let word = currentWordArr.join('');
        results.push(word);
    } else {
        let digit = digits[index];
        let letters = digitsToLetters[digit];
        for (let letter of letters) {
            currentWordArr[index] = letter;
            letterCombinationHelper(index + 1, digits, currentWordArr, results);
        }
    }
}