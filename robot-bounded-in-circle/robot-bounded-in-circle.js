/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let endCoordinates = [-Infinity, Infinity];
    let currCoordinates = [0, 0];
    let changeDir = [['N', 1], ['W', -1], ['S', -1], ['E', 1]];
    let index = 0;
    let tries = 4;
    let j = 0;
   
    for (let i = 0; i < instructions.length * 4; i++) {
        if (j >= instructions.length) j = 0;
        if (instructions[j] === 'G') {
            if (index === 0 || index === 2) currCoordinates[1] += changeDir[index][1];
            if (index === 1 || index === 3) currCoordinates[0] += changeDir[index][1];
     
        } else {
            if (instructions[j] === 'L') index--;
            else index++;
            if (index === -1) index = 3;
            if (index === 4) index = 0;
        }
        j++;
       }

    return currCoordinates[0] === 0 && currCoordinates[1] === 0 ? true : false
};