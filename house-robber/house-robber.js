/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    
    let max = [];
    max[0] = nums[0];
    max[1] = Math.max(nums[0], nums[1])
    
    for (let i = 2; i < nums.length; i++) {
        max[i] = Math.max(max[i - 1], nums[i] + max[i - 2]);
    }
    
    return max[max.length - 1];
};