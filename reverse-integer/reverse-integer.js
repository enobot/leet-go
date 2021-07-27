/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedNum = 0;
    const isNegative = x < 0;
    x = Math.abs(x);
    
    while(x > 0) {
        reversedNum = (reversedNum * 10) + Math.floor(x % 10);
        x = Math.floor(x / 10);
    }
    
    if(reversedNum > Math.pow(2, 31) - 1 || reversedNum < Math.pow(-2, 31)) return 0;
    return isNegative ? -reversedNum : reversedNum;
};