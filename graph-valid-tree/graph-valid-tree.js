/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (n < 2) return true;
    
    let neighbors = new Map();
    let visited = new Set();
    
    for (let i = 0; i < n; i++) {
        neighbors.set(i, []);
    }
    
    for (const [vertex, edge] of edges) {
        neighbors.get(vertex).push(edge);
        neighbors.get(edge).push(vertex)
    }
    if (hasCycle(0, -1, neighbors, visited)) return false;
    
    return visited.size === n;
};

function hasCycle(vertex, parent, neighbors, visited) {
    visited.add(vertex);
    
    for (let edge of neighbors.get(vertex)) {
        if (!visited.has(edge)) {
            if (hasCycle(edge, vertex, neighbors, visited)) return true;
        } else if (edge !== parent) return true;
    }
    
    return false
}