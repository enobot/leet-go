/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0] && traverseBoard(board, word, 0, row, col)) return true;
        }
    }
    
    return false;
};

function traverseBoard(board, word, count, row, col) {
    if (count === word.length) return true;
    
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length ||
        board[row][col] !== word[count]) return false;
    
    let visited = board[row][col];
    board[row][col] = ' ';
    
    let isWordFound = traverseBoard(board, word, count + 1, row + 1, col )
        || traverseBoard(board, word, count + 1, row - 1, col)
        || traverseBoard(board, word, count + 1, row, col + 1)
        || traverseBoard(board, word, count + 1, row, col - 1)
    
    board[row][col] = visited;
    
    return isWordFound;
}
