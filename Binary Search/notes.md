
# Binary Search (LeetCode #704)

## Problem

Given a sorted array `nums` and a `target`, return the index of `target`. If not found, return `-1`. Must be O(log n).

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
```

---

## Key Insight

Instead of checking every element (O(n)), we split the array in half each time (O(log n)). Each step eliminates half of the remaining elements.

---

## Algorithm

1. Set `left = 0` and `right = nums.length - 1`
2. Calculate `mid` from left and right
3. Compare `nums[mid]` with target:
   - Equal → found it, return `mid`
   - Target is bigger → move right (`left = mid + 1`)
   - Target is smaller → move left (`right = mid - 1`)
4. If nothing found → return `-1`

---

## Solution (TypeScript)

```typescript
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;   // move right
        } else {
            right = mid - 1;  // move left
        }
    }

    return -1;
}
```

---

## Walkthrough Example

```
nums = [-1, 0, 3, 5, 9, 12], target = 9

left=0, right=5
mid = (0+5)/2 = 2 → nums[2]=3 < 9 → move right
left=3, right=5

mid = (3+5)/2 = 4 → nums[4]=9 === 9 → return 4 ✅
```

---

## Why `Math.floor`?

```
left=3, right=4
(3+4)/2 = 3.5 → nums[3.5] doesn't exist!
Math.floor(3.5) = 3 ✅
```

---

## Complexity

| | |
|---|---|
| **Time** | O(log n) — half the array eliminated each step |
| **Space** | O(1) — only left, right, mid variables |