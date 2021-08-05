/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0, currentProfit = 0;
    if (prices.length === 1) return 0;
    let min = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= min) min = prices[i];
        if (prices[i] > min) {
            currentProfit = prices[i] - min;
            maxProfit = Math.max(maxProfit, currentProfit)
        }
    }
    
    return maxProfit;
};