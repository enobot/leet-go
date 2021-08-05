/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let results = [];
    let currentInterval = intervals[0];
    if (intervals.length === 1) return [currentInterval];
    
    for (let i = 1; i < intervals.length; i++) {
        let currentEnd = currentInterval[1];
        let nextStart = intervals[i][0];
        let nextEnd = intervals[i][1];
        
        if (currentEnd >= nextStart) {
            currentInterval = [currentInterval[0], Math.max(currentEnd, nextEnd)];
        } else {
            results.push(currentInterval);
            currentInterval = [nextStart, nextEnd];
        }
        
        if (i === intervals.length - 1) results.push(currentInterval)
    }
    
    return results;
};