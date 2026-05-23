# Check if Array Is Sorted and Rotated

## Idea

A sorted and rotated array can have **at most one "drop"** — a place where `nums[i] > nums[i+1]`.
Count the drops using `% n` to close the array into a ring (last element is compared with the first).

```
[3, 4, 5, 1, 2]   →   5→1 is a drop (one drop)     →   true
[2, 1, 3, 4]      →   2→1 is a drop, 4→2 is a drop  →   false
[1, 2, 3]         →   no drops                      →   true
```

---

## Logic

1. Iterate through the array, comparing each element with the **next** one via `(i + 1) % n`
2. `% n` closes the ring — on the last iteration we compare `nums[n-1]` with `nums[0]`
3. If `nums[i] > nums[(i+1) % n]` → found a drop, `drops++`
4. If `drops > 1` → array couldn't have been rotated → return `false`
5. Reached the end with `drops ≤ 1` → return `true`

---

## Code

```typescript
function check(nums: number[]): boolean {
    let drops = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            drops += 1;
        }
        if (drops > 1) {
            return false;
        }
    }
    return true;
}
```

---

## Complexity

| | |
|---|---|
| Time  | O(n) |
| Space | O(1) |

---

## Key Takeaway

> `% n` turns the array into a **ring** — no need for a separate check on the last element.
> One pass is enough: more than one drop means the array is not a rotated sorted array.