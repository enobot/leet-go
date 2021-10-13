/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0]
    let firstHouse = [nums[0]];
    let secondHouse = [0, nums[1]];
    
    for(let i = 1; i < nums.length - 1; i++) {
        firstHouse[i] = Math.max((firstHouse[i - 2] || 0) + nums[i], firstHouse[i - 1])
    }
    
    for (let j = 2; j < nums.length; j++) {
        secondHouse[j] = Math.max(secondHouse[j - 2] + nums[j], secondHouse[j - 1])
    }
    
    return Math.max(firstHouse.pop(), secondHouse.pop());
};