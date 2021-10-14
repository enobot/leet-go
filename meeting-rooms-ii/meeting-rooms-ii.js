/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let count = 0;
    let maxCount = 0;
    let starts = [], ends = [];
    let startPointer = 0, endPointer = 0;
    
    for (let [start, end] of intervals) {
        starts.push(start);
        ends.push(end);
    }
    ends.sort((a,b) => a - b)
    
    while(startPointer < starts.length) {
        if (starts[startPointer] < ends[endPointer]) {
            count++;
            maxCount = Math.max(maxCount, count);
            startPointer++;
        } else if (starts[startPointer] >= ends[endPointer]) {
            count--;
            endPointer++;
        }
    }
    
    return maxCount;
};