/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    let increase = new Array(nums.length).fill(1);
    let max = 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                increase[i] = Math.max(increase[i], increase[j] + 1)
            }
        }
        max = Math.max(max, increase[i]);
    }
        console.log(increase)
    
    return max;
    
};