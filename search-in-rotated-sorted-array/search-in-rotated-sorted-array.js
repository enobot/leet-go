/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        nums[mid] > nums[right] ? left = mid + 1 : right = mid;
    }
    
    let start = left;
    left = 0;
    right = nums.length - 1;
    
    (target >= nums[start] && target <= nums[right]) ? left = start : right = start;
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};