
# Find Minimum in Rotated Sorted Array (LeetCode #153)

## Problem

Given a sorted rotated array, find the minimum element in O(log n).

```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
```

---

## Key Insight

Same principle as binary search — `left`, `right`, `mid`. But instead of searching for a specific element, we search for **where the minimum is** by comparing `nums[mid]` with `nums[right]`.

```
[4, 5, 6, 7, 0, 1, 2]
            ↑
         minimum is here (where rotation happened)
```

---

## Algorithm

1. Set `left = 0` and `right = nums.length - 1`
2. Loop `while left < right`
3. Calculate `mid`
4. Compare `nums[mid]` with `nums[right]`:
   - `nums[mid] > nums[right]` → rotation happened in right part, minimum is there → `left = mid + 1`
   - `nums[mid] < nums[right]` → right part is normal, minimum is in left part or at `mid` → `right = mid`
5. Return `nums[left]`

---

## Solution (TypeScript)

```typescript
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;   // minimum in right part
        } else {
            right = mid;      // minimum in left part or at mid
        }
    }

    return nums[left];
}
```

---

## Walkthrough Example

```
nums = [4,5,6,7,0,1,2]

left=0, right=6
mid=3 → nums[3]=7, nums[6]=2
7 > 2 → minimum in right → left = 4

left=4, right=6
mid=5 → nums[5]=1, nums[6]=2
1 < 2 → minimum in left or mid → right = 5

left=4, right=5
mid=4 → nums[4]=0, nums[5]=1
0 < 1 → right = 4

left=4, right=4 → stop
return nums[4] = 0 ✅
```

---

## Why compare with `nums[right]` and not `nums[left]`?

```
[4, 5, 6, 7, 0, 1, 2]
 left          right

nums[right] always tells us if the right half is "normal" or not.
If nums[mid] > nums[right] → something is wrong on the right → minimum there.
If nums[mid] < nums[right] → right half is normal → minimum is left or mid.
```

---

## Why `while(left < right)` and not `left <= right`?

Because `right = mid` (not `mid - 1`) — if we used `<=` we could loop forever when `left === right` 🙂

---

## Complexity

| | |
|---|---|
| **Time** | O(log n) — half eliminated each step |
| **Space** | O(1) — only left, right, mid variables |