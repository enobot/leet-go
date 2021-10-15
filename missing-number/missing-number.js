/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let expectedSum = 0;
    let totalSum = 0;
    
    for (let i = 1; i <= nums.length; i++) expectedSum += i;
    for (let j = 0; j < nums.length; j++) totalSum += nums[j]; 
    
    return expectedSum - totalSum;
};