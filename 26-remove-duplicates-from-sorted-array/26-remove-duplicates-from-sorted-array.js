/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1, pointerOne = 0, pointerTwo = 1;
    
    while (pointerTwo < nums.length) {
        if (nums[pointerOne] === nums[pointerTwo]) {
            pointerTwo++;
        } else {
            nums[pointerOne + 1] = nums[pointerTwo];
            k++;
            pointerOne++;
            pointerTwo++;
        }
    } 
    
    return k === 0 ? 0 : k;
}