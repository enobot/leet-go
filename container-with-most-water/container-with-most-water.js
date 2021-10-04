/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let mostWater = 0;
    let left = 0, right = height.length - 1;
    
    while (left < right) {
        let currentWater = (right - left) * Math.min(height[right], height[left]);
        mostWater = Math.max(mostWater, currentWater);
        height[left] < height[right] ? left++ : right--;
    }
    
    return mostWater;
};