/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let size = matrix.length - 1;
    
    for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {//how many layers in the matrix 
        for (let i = layer; i < size - layer; i++) {
            let top = matrix[layer][i];
            let right = matrix[i][size - layer];
            let bottom = matrix[size - layer][size - i];
            let left = matrix[size - i][layer]
            
            matrix[layer][i] = left;
            matrix[i][size - layer] = top;
            matrix[size - layer][size - i] = right;
            matrix[size - i][layer] = bottom;
        }
    }
    
    return matrix;
};