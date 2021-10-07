/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const totalCombos = [];
    
    findCombos(candidates, target, totalCombos, [], 0);
    return totalCombos;
};

function findCombos(candidates, target, totalCombos, combo, idx) {
    if (target === 0) {
        totalCombos.push([...combo])
    }
    
    for (let i = idx; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            combo.push(candidates[i]);
            findCombos(candidates, target - candidates[i], totalCombos, combo, i);
            combo.pop()
        }
    }
}