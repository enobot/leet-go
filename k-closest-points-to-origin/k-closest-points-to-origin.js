/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distances = [];
    let results = [];
    
    for (let i = 0; i < points.length; i++) {
        let distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);
        distances.push([distance, points[i]]);
    }
    
    distances.sort((a,b) => a[0] - b[0]);
    
    for (let i = 0; i < k; i++) {
        results.push(distances[i][1]);
    }
    
    return results;
};