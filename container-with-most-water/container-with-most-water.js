/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAmount = 0;
    let left = 0, right = height.length - 1;
    
    while (left < right) {
        let currentAmount = (right - left) * Math.min(height[left], height[right]);
        maxAmount = Math.max(maxAmount, currentAmount);
        height[right] > height[left] ? left++ : right--;
    }
    
    return maxAmount;
};