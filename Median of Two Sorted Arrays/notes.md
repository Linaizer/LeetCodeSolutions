# Median of Two Sorted Arrays (LeetCode #4)

## Problem

Given two sorted arrays, return the median of the two sorted arrays in O(log(m+n)).

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.5
```

---

## Simple Solution O((m+n) log(m+n))

Merge, sort, find median:

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sum = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(sum.length / 2);

    if(sum.length % 2 === 1) {
        return sum[mid];
    } else {
        return (sum[mid - 1] + sum[mid]) / 2;
    }
}
```

**Why `sort((a, b) => a - b)`?** Default `.sort()` sorts as strings — always pass a comparator for numbers!

---

## Optimal Solution O(log(m+n)) — Binary Search on Cut

### Key Idea

Instead of merging, find the right **cut** in both arrays so that:
- left parts of both arrays ≤ right parts of both arrays

```
nums1 = [1, 3] | [5, 7]
nums2 = [2, 4] | [6, 8]

left:  max(3, 4) = 4
right: min(5, 6) = 5

median = (4 + 5) / 2 = 4.5 ✅
```

### Algorithm

1. Always binary search on the **smaller** array (swap if needed)
2. `cut1` = cut in nums1 (binary search)
3. `cut2` = automatically calculated so `cut1 + cut2 = half of total length`
4. Get boundary values `l1, l2, r1, r2`
5. If `l1 <= r2 && l2 <= r1` → found the right cut → return median
6. If `l1 > r2` → move cut left
7. Else → move cut right

### Solution (TypeScript)

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;

    while(left <= right) {
        const cut1 = Math.floor((left + right) / 2);
        const cut2 = Math.floor((m + n + 1) / 2) - cut1;

        const l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        const l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        const r1 = cut1 === m ? Infinity  : nums1[cut1];
        const r2 = cut2 === n ? Infinity  : nums2[cut2];

        if(l1 <= r2 && l2 <= r1) {
            if((m + n) % 2 === 1) return Math.max(l1, l2);
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        } else if(l1 > r2) {
            right = cut1 - 1;
        } else {
            left = cut1 + 1;
        }
    }

    return 0;
}
```

---

## Understanding Boundary Values

```typescript
const l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1]
```
If cut is at the very start → no left element → use `-Infinity` so it never blocks the condition.

```typescript
const r1 = cut1 === m ? Infinity : nums1[cut1]
```
If cut is at the very end → no right element → use `Infinity` so it never blocks the condition.

---

## Walkthrough Example

```
nums1 = [1,3], nums2 = [2,4]

left=0, right=2
cut1=1, cut2=1
l1=1, l2=2, r1=3, r2=4
1 <= 4 && 2 <= 3 ✅ → found!

(2+2) % 2 === 0 → (max(1,2) + min(3,4)) / 2 = (2+3) / 2 = 2.5 ✅
```

---

## Complexity

| | Simple | Optimal |
|---|---|---|
| **Time** | O((m+n) log(m+n)) | O(log(m+n)) |
| **Space** | O(m+n) | O(1) |