/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let possibleWays = new Array(amount + 1).fill(Infinity);
    possibleWays[0] = 0;
    
    for (let i = 1; i < possibleWays.length; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                possibleWays[i] = Math.min(possibleWays[i], possibleWays[i - coin] + 1)
            }
        }
    }
    return possibleWays[amount] === Infinity ? -1 : possibleWays[amount];
};
