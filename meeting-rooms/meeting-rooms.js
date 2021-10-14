/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length === 0) return true;
    intervals.sort((a, b) => a[0] - b[0]);
    
    let [prevStart, prevEnd] = intervals[0];
    
    for(let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = intervals[i];
        
        if(prevEnd > currStart) return false;
        else [prevStart, prevEnd] = [prevStart, Math.max(prevEnd, currEnd)]
    }
    
    return true;
};