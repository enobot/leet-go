/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let orderedSpiral = [];
    let startRow = 0, endRow = matrix.length - 1;
    let startCol = 0, endCol = matrix[0].length - 1;
    
    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            orderedSpiral.push(matrix[startRow][col])
        } 
        
        for (let row = startRow + 1; row <= endRow; row++) {
            orderedSpiral.push(matrix[row][endCol]);
        }
        
        for (let col = endCol - 1; col >= startCol; col--) {
            if (endRow === startRow) break;
            orderedSpiral.push(matrix[endRow][col]);
        }
        
        for (let row = endRow - 1; row > startRow; row--) {
            if (endCol === startCol) break;
            orderedSpiral.push(matrix[row][startCol]);
        }
        
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    
    return orderedSpiral;
};