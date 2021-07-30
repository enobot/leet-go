/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]; 
        currentMax = Math.max(currentMax, sum)
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            currentMax = Math.max(currentMax, sum)
        }
    }
    
    return nums.length === 1 ? nums[0] : currentMax;
};