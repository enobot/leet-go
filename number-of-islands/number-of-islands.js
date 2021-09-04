/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numberOfIslands = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numberOfIslands += checkIsland(grid, i, j)
            }
        }
    }
    return numberOfIslands;
};

function checkIsland(matrix, row, column) {
    if (row < 0 || row >= matrix.length || column < 0 ||
        column >= matrix[row].length || matrix[row][column] === '0') return 0;
    matrix[row][column] = '0';
    checkIsland(matrix, row + 1, column);
    checkIsland(matrix, row - 1, column);
    checkIsland(matrix, row, column + 1);
    checkIsland(matrix, row, column - 1);
    
    return 1;
}