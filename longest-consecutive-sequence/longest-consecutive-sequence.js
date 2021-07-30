/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let set = new Set(nums);
    let longestStreak = 0;
    
    for (let num of set) {
        let currentStreak = 1;
        let currNum = num;
        if (set.has(currNum - 1)) continue;
        
        while (set.has(currNum + 1)) {
            currNum++;
            currentStreak++;
        }
        
        longestStreak = Math.max(currentStreak, longestStreak);
    }
    return longestStreak;

};