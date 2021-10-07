/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dpWays = new Array(n).fill(1);
    
    for (let row = 1; row < m; row++) {
        for (let column = 1; column < n; column++) {
            dpWays[column] = dpWays[column - 1] + dpWays[column]
        }
    }
    return dpWays[n - 1];
};
