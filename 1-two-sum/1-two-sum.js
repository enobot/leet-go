/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indicies = {};
    
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        
        if (indicies[difference] !== undefined) return [i, indicies[difference]];
        else indicies[nums[i]] = i;

    }

};