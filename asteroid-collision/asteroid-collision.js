/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    let lastAsteroid = stack.length - 1;
    
    for (let i = 0; i < asteroids.length; i++) {
        if ((stack.length === 0 || stack[stack.length - 1] < 0) && asteroids[i] < 0) {
            stack.push(asteroids[i]);
        } else if (asteroids[i] > 0) {
            stack.push(asteroids[i])
        } else {
            let prevAsteroid = stack.pop();
            
            if (Math.abs(prevAsteroid) > Math.abs(asteroids[i])) {
                stack.push(prevAsteroid)
            } else if (Math.abs(prevAsteroid) < Math.abs(asteroids[i])) {
                i--;
            } else {
                continue;
            }
        }
    }
    
    return stack;
};