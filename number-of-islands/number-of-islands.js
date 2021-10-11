/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let totalIslands = 0;
    if (grid.length === 0 || grid === null) return 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            totalIslands += traverseIsland(grid, row, col)
        }
    }
    
    return totalIslands;
};

function traverseIsland(grid, row, column) {
    if (row < 0 || row >= grid.length|| column < 0 || column >= grid[row].length
       || grid[row][column] === '0') return 0;
    
    grid[row][column] = '0';
    
    traverseIsland(grid, row + 1, column);
    traverseIsland(grid, row - 1, column);
    traverseIsland(grid, row, column + 1);
    traverseIsland(grid, row, column - 1)
    
    return 1;
}