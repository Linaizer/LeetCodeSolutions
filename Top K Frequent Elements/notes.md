# Top K Frequent Elements (LeetCode #347)

## Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

---

## Key Insight

Count how many times each number appears, then sort by frequency and take the top `k`.

```
nums = [1,1,1,2,2,3]

frequency:
1 → 3 times
2 → 2 times
3 → 1 time

top k=2: [1, 2]
```

---

## Algorithm

1. Create a `Map<number, number>` to store each number and its frequency
2. Loop through the array:
   - If number already in map → increment by 1
   - If not → add it with value 1
3. Convert map to array of pairs, sort by frequency, take first `k`, extract just the numbers

---

## Solution (TypeScript)

```typescript
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);  // increment
        } else {
            map.set(nums[i], 1);                       // add with 1
        }
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])  // sort by frequency descending
        .slice(0, k)                   // take first k
        .map(entry => entry[0]);       // extract just the numbers
}
```

---

## Understanding the chain

```
map = { 1→3, 2→2, 3→1 }

[...map.entries()]        → [[1,3], [2,2], [3,1]]  // array of [number, frequency] pairs

.sort((a, b) => b[1] - a[1])  → [[1,3], [2,2], [3,1]]  // sorted by frequency descending
//                                        ↑↑
//                               b[1] - a[1] means sort by second element (frequency)
//                               b - a = descending (largest first)

.slice(0, k)              → [[1,3], [2,2]]          // take first k=2

.map(entry => entry[0])   → [1, 2]                  // take only the number (first element)
```

---

## Why `b[1] - a[1]` and not `a[1] - b[1]`?

```
a[1] - b[1] → ascending  (1, 2, 3...)  ❌ smallest first
b[1] - a[1] → descending (3, 2, 1...)  ✅ largest first
```

---

## Complexity

| | |
|---|---|
| **Time** | O(n log n) — because of sorting |
| **Space** | O(n) — map stores all unique elements |