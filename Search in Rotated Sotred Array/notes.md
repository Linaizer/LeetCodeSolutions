# Search in Rotated Sorted Array — Solution Note

## Idea
A rotated array always splits into **two sorted halves**.
Binary search still works — but at each step you first figure out
which half is clean (no break), then check if target lives there.

```
[4, 5, 6, 7, 0, 1, 2]
 ^        ^
left     mid

nums[left]=4 <= nums[mid]=7 → left half is clean [4..7]
target=0 → not in [4..7] → go right
```

## Logic
- Compare `nums[left]` vs `nums[mid]` to find the clean half
  - `nums[left] <= nums[mid]` → left half is sorted
  - otherwise → right half is sorted
- Then ask: does `target` fall inside the clean half's range?
  - yes → move into it
  - no  → move into the other half

## Code
```typescript
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            // left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
```

## Key takeaway
> One half is always cleanly sorted — use that to decide where to go.
> Same cost as regular binary search: **O(log n)**.