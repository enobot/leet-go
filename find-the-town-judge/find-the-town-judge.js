/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustCount = new Array(n + 1).fill(0);
    
    for (let [person, trustee] of trust) {
        trustCount[person]--;
        trustCount[trustee]++;
    }
    
    for (let i = 1; i < trustCount.length; i++) {
        if (trustCount[i] === n - 1) return i;
    }
    
    return -1;
};