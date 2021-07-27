/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let convertedInt = 0;
    
    for (let i = 0; i < s.length; i++) {
        let currentValue = romanNumerals[s[i]];
        let nextValue = romanNumerals[s[i + 1]];
        
        if (currentValue < nextValue) convertedInt -= currentValue;
        else convertedInt += currentValue;
    }
    
    return convertedInt;
};