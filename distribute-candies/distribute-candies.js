/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let types = new Set(candyType);
    let numOfCandy = candyType.length / 2
    return types.size > numOfCandy ? numOfCandy : types.size 
};