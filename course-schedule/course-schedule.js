/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();
    let visitingNodes = new Set();
    let visitedNodes = new Set();
    
    for(let [course, prereq] of prerequisites) {
        if(graph.has(course)) {
            let prereqList = graph.get(course);
            prereqList.push(prereq);
            graph.set(course, prereqList);
        }else {
            graph.set(course, [prereq]);
        }
    }
    
    for(let [course, prereq] of graph) {
        if(DFS(course, graph, visitingNodes, visitedNodes)) {
            return false;
        }
    }
    
    return true;
};

function DFS(course, graph, visitingNodes, visitedNodes) {
    visitingNodes.add(course); //0
    let prereqsOfNode = graph.get(course); //[1, 3]
    
    if(prereqsOfNode) { 
        for(let prereq of prereqsOfNode) {
            if(visitedNodes.has(prereq)) { //1
                continue;
            }
            
            if(visitingNodes.has(prereq)) { //
                return true;
            }
            
            if(DFS(prereq, graph, visitingNodes, visitedNodes)) {
                return true;
            }
        }
    }
    
    visitingNodes.delete(course);
    visitedNodes.add(course);
    
    return false;
}