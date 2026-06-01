# Minimum Cost of Buying All Candies — Solution Note

## Idea

Sort the array in **descending order**, then walk through it. Every **third** candy (index where `i % 3 === 2`) is free — skip it. Add up everything else.

## Why descending?

We want to maximize the value of free candies. Since the free candy must cost ≤ the minimum of the two purchased, the optimal strategy is:

- Buy the **2 most expensive** → get the **3rd most expensive** for free
- Repeat for the next group of 3

Sorting descending lets us naturally pick the most expensive free candy in each group.

## Why `i % 3 === 2`?

| Index | 0 | 1 | 2 | 3 | 4 | 5 |
|-------|---|---|---|---|---|---|
| Role  | buy | buy | **free** | buy | buy | **free** |

Every index where `i % 3 === 2` is a free candy → skip it.

## Code

```typescript
function minimumCost(cost: number[]): number {
    const sorted = cost.sort((a, b) => b - a);
    let acc = 0;

    for (let i = 0; i < sorted.length; i++) {
        if (i % 3 === 2) continue; // free candy, skip
        acc += sorted[i];
    }

    return acc;
}
```

## Key takeaway

> Sort descending, then skip every index where `i % 3 === 2`. Use `(a, b) => b - a` for numeric descending sort — never `.sort()` alone (it sorts lexicographically).