/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let uniqueNums = new Set(nums)
    let longestStreak = 0;
    
    for (let num of uniqueNums) {
        let currentStreak = 1;
        let currentNum = num;
        
        if (uniqueNums.has(num - 1)) continue;
        
        while (uniqueNums.has(currentNum + 1)) {
            currentStreak++;
            currentNum++;
        }
        
        longestStreak = Math.max(longestStreak, currentStreak);
    }
    
    return longestStreak;
};