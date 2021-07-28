/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    let left = 0;
    let right = 1;
    
    while (left < nums.length) {
        if (nums[right] === nums[left]) {
            nums.splice(right, 1);
        } else {
            left++;
            right++;
            k++;
        }
    }
    return nums.length === 0 ? 0 : k;
};