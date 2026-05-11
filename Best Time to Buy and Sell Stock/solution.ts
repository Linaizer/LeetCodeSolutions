function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;  

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        }
        const profit = price - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }  

    return maxProfit; 
}