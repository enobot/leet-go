/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let combinations = [];
    let open = n, close = n;
    generateCombinations(open, close, combinations, "")
    return combinations;
};

function generateCombinations(open, close, combos, formedParentheses) {
    if (open === 0 && close === 0) {
        combos.push(formedParentheses);
        return;
    } 
    
    if (open > 0 ) generateCombinations(open - 1, close, combos, formedParentheses + '(');
    if (close > open) generateCombinations (open, close - 1, combos, formedParentheses + ')');
};