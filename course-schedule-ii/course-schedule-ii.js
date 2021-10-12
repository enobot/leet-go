/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const courses = new Map();
    const visited = new Set();
    const visiting = new Set();
    const order = [];
    
    for (const [course, prereq] of prerequisites) {
        if (courses.has(course)) {
            courses.get(course).push(prereq)
        } else {
            courses.set(course, [prereq])
        }
    }
    
    for (let i = 0; i < numCourses; i++) {
        if(!visited.has(i) && DFS(i, courses, visited, visiting, order)) return [];
    }

    return order;
};

function DFS(course, courses, visited, visiting, order) {
    visiting.add(course);
    let prereqs = courses.get(course);
    
    if (prereqs) {
        for (const prereq of prereqs) {
            if (visiting.has(prereq)) return true;
            if (visited.has(prereq)) continue;
            if (DFS(prereq, courses, visited, visiting, order)) return true;
        }
    }
    
    visiting.delete(course);
    visited.add(course);
    order.push(course);
    
    return false;
}