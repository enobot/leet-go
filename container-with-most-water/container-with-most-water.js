/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let mostWater = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let currentContainer = (right - left) * Math.min(height[left], height[right]);
        mostWater = Math.max(currentContainer, mostWater);
        
        if (height[right] > height[left]) left++;
        else right--;
    }
    return mostWater;
};