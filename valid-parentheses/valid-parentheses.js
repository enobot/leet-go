/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openParentheses = [];
    let parentheses = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
            openParentheses.push(s[i])
        } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (openParentheses[openParentheses.length - 1] !== parentheses[s[i]]) {
                return false;
            } else {
                openParentheses.pop();
            }
        }
    }
    return openParentheses.length === 0 ? true : false;
};