/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsIdx = {};
    
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (numsIdx[difference] !== undefined) return [numsIdx[difference], i]
        else numsIdx[nums[i]] = i;
    }
};