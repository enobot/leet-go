/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let correspondingBrackets = {
        ')': '(',
        '}' : '{',
        ']': '['
    };
    
    let stack = [];
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') stack.push(char);
        else if (char === ')' || char === '}' || char === ']') {
            if (correspondingBrackets[char] !== stack[stack.length - 1]) return false;
            else if (correspondingBrackets[char] === stack[stack.length - 1]) stack.pop();
        }
    }
    
    if (stack.length > 0) return false; 
    return s.length <= 1 ? false : true;
};