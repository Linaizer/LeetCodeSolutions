# Get Common — Solution Note

## Idea
Create a `Set` from the **2nd array**, loop through the **1st array** and check if the current element exists in the `Set`. If yes — return it immediately. If the loop finishes and nothing was found — return `-1`.

Since arrays are already **sorted in ascending order**, the first match we find is automatically the minimum.

## Why Set and not array?
| Method | Speed |
|---|---|
| `array.includes()` | `O(n)` — slow for large arrays |
| `set.has()` | `O(1)` — always fast |

## Code
```typescript
function getCommon(nums1: number[], nums2: number[]): number {
    const set = new Set(nums2)

    for (let i = 0; i < nums1.length; i++) {
        if (set.has(nums1[i])) {
            return nums1[i] // found common minimum — return immediately
        }
    }

    return -1 // no common element found
};
```

## Key takeaway
> When searching for an element inside a loop — use `Set.has()` instead of `array.includes()`. This is a very common pattern in LeetCode problems.