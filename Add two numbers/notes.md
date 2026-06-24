# Add Two Numbers (LeetCode #2)

## Problem

Given two non-empty linked lists representing two non-negative integers stored in **reverse order**, add the two numbers and return the sum as a linked list.

```
Input:  l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Reason: 342 + 465 = 807
```

---

## Key Insight

The digits are already in reverse order — so we can traverse both lists from left to right, just like **addition in a column** (from least significant to most significant digit).

---

## Algorithm

1. Traverse both lists simultaneously
2. At each step: `total = l1.val + l2.val + carry`
3. Append `total % 10` to result
4. Set `carry = Math.floor(total / 10)`
5. After the loop, if `carry > 0` — append it

---

## Solution (TypeScript)

```typescript
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let result: number[] = [];
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 !== null || l2 !== null) {
        const a = l1 ? l1.val : 0;  // use 0 if list is exhausted
        const b = l2 ? l2.val : 0;

        const total = a + b + carry;
        carry = Math.floor(total / 10);

        result.push(total % 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry > 0) {
        result.push(carry);
    }

    for (const num of result) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummyHead.next;
}
```

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| `while (l1 && l2 !== null)` | `while (l1 !== null \|\| l2 !== null)` — stop only when BOTH are null |
| `let a = l1` | `let a = l1.val` — need the digit, not the node |
| `let carry = ...` inside loop | `carry = ...` — don't redeclare with `let` |
| `result.append()` | `result.push()` — JavaScript/TypeScript syntax |
| Forgetting to build ListNode | Must build linked list, not return array |
| Not moving pointers | `l1 = l1 ? l1.next : null` at end of loop |

---

## Tricky Edge Cases

```
[9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]
```
- Lists have **different lengths** → use `0` when one is exhausted
- Final carry → `9999999 + 9999 = 10009998`, last digit `1` comes from leftover carry

```
[0] + [0] = [0]
```
- Both zeros, carry stays 0, result is just `[0]`

---

## Complexity

| | |
|---|---|
| **Time** | O(max(m, n)) — traverse the longer list |
| **Space** | O(max(m, n)) — result list length |

---

## Pattern: Dummy Head Node

Using a `dummyHead` is a classic linked list trick:

```typescript
let dummyHead = new ListNode(0);  // sentinel node
let current = dummyHead;

// ... build list via current.next = new ListNode(val)

return dummyHead.next;  // skip the sentinel
```

Avoids special-casing the first node insertion.