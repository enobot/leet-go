/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let totalCombinations = [];
    
    combinationHelper(candidates, target, totalCombinations, [], 0)
    return totalCombinations
};

function combinationHelper(candidates, target, totalCombinations, combo, idx) {
    if (target === 0) {
        totalCombinations.push([...combo])
    }
    
    for (let i = idx; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            combo.push(candidates[i])
            combinationHelper(candidates, target - candidates[i], totalCombinations, combo, i);
            combo.pop();            
        }
    }
}