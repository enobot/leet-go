/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1; 
    let maxWater = 0;
    
    while (left < right) {
        let currWater = Math.min(height[left], height[right]) * (right - left)
        maxWater = Math.max(maxWater, currWater);
        if (height[left] > height[right]) right--;
        else left++;
    }
    
    return maxWater;
};