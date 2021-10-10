/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMax = nums[0], prevMin = nums[0];
    let result = nums[0];
    
    if(nums.length === 0) return 0;
    
    for (let i = 1; i < nums.length; i++) {
        let currMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
        let currMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
        
        prevMax = currMax;
        prevMin = currMin;
        
        result = Math.max(currMax, result)
    }
    
    return result
};