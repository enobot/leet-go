/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Array(s.length + 1).fill(false);
    memo[s.length] = true;
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {
            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                memo[i] = memo[i + word.length];
            }
            
            if (memo[i]) break;
        }
    }
    console.log(memo)
    return memo[0];
};