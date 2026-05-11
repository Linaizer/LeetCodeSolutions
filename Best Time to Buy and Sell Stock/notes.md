Find max profit from a single buy/sell transaction.
If no profit is possible — return 0.

Approach: one pass through the array, O(n)
Track two things at every step:
  - minPrice  : cheapest price seen so far (best day to buy)
  - maxProfit : best profit found so far

For each price ask two questions:
  - is this cheaper than minPrice? → update minPrice (new buy day)
  - if we sell today → is profit > maxProfit? → update maxProfit

Why no extra operations needed:
  we don't store all prices, don't compare all pairs —
  one pass is enough because we always know the cheapest buy day so far.