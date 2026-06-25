
# Count Subarrays With Majority Element (LeetCode #2dominant)

## Problem

Given an integer array `nums` and a `target`, return the number of subarrays where `target` is the majority element (appears strictly more than half the times).

```
Input: nums = [1,2,2,3], target = 2
Output: 5
```

---

## Key Insight

For each subarray `[i..j]`, check if `target` appears more than `length / 2` times:

```
[1, 2, 2]  → count(2) = 2, length = 3 → 2 > 1.5 ✅
[1, 2]     → count(2) = 1, length = 2 → 1 > 1   ❌
```

---

## Algorithm

1. Loop through the array with `i` — start of subarray
2. At each new `i`, reset `calculate = 0`
3. Inner loop with `j` — end of subarray (this is the subarray `[i..j]`)
4. If `nums[j] === target` → increment `calculate`
5. If `calculate > arrLength / 2` → increment `count`
6. Return `count`


## Why `calculate` resets at `i`, not `j`?

`calculate` counts how many times target appears in current subarray `[i..j]`. As `j` grows, the subarray gets bigger — so we accumulate. But when `i` changes, we start a completely new subarray:

```
i=0: [1], [1,2], [1,2,2], [1,2,2,3]  ← calculate resets here
i=1: [2], [2,2], [2,2,3]              ← calculate resets here
```

---

## Walkthrough Example

```
nums = [1,2,2,3], target = 2

i=0, calculate=0
  j=0: [1]     calculate=0, 0 > 0.5? ❌
  j=1: [1,2]   calculate=1, 1 > 1?   ❌
  j=2: [1,2,2] calculate=2, 2 > 1.5? ✅ count=1
  j=3: [1,2,2,3] calculate=2, 2 > 2? ❌

i=1, calculate=0
  j=1: [2]     calculate=1, 1 > 0.5? ✅ count=2
  j=2: [2,2]   calculate=2, 2 > 1?   ✅ count=3
  j=3: [2,2,3] calculate=2, 2 > 1.5? ✅ count=4

i=2, calculate=0
  j=2: [2]     calculate=1, 1 > 0.5? ✅ count=5
  j=3: [2,3]   calculate=1, 1 > 1?   ❌

i=3, calculate=0
  j=3: [3]     calculate=0, 0 > 0.5? ❌

result: 5 ✅
```

---

## Complexity

| | |
|---|---|
| **Time** | O(n²) — two nested loops |
| **Space** | O(1) — only counters |