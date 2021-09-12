/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let totalWays = 0;
    
    totalWays = climbStairsHelper(n, {});
    return totalWays;
};

function climbStairsHelper(n, memo) {
    if (memo[n]) return memo[n]
    if (n < 0) return 0;
    if (n === 0) return 1;
    memo[n] = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo)
    return memo[n];
}