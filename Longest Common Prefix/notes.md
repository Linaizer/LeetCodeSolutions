# Longest Common Prefix (LeetCode #14)

## Problem

Given an array of strings, find the longest common prefix. If there is no common prefix, return `""`.

```
Input: ["flower", "flow", "flight"]
Output: "fl"
```

---

## Key Insight

Take the first word as a reference and go through its letters one by one. For each letter, check if **all other words** have the same letter at the same position. If not — stop and return what we collected.

---

## Algorithm

1. Create a `prefix` variable to accumulate the result
2. Loop through positions (`i`) of the first word
3. Take `letter = strs[0][i]` as the reference letter at position `i`
4. Loop through all other words (`j` starts at `1`, not `0` — first word is already our reference)
5. Check if `strs[j][i]` equals `letter` — if not, return `prefix`
6. If all words matched — add `letter` to `prefix`

---

## Understanding `strs[j][i]`

This is just accessing a specific letter in a specific word:

```
strs[j]    → the j-th word
strs[j][i] → the i-th letter in the j-th word

strs = ["flower", "flow", "flight"]
         j=0       j=1     j=2

strs[1][2] → "flow"[2]   → 'o'
strs[2][2] → "flight"[2] → 'i'
```

`j` starts at `1` because `j=0` is the first word — we already took `letter` from it, no need to compare it with itself.



## Walkthrough Example

```
strs = ["flower", "flow", "flight"]

i=0  letter = 'f'
     flow[0]   = 'f' ✅
     flight[0] = 'f' ✅
     prefix = "f"

i=1  letter = 'l'
     flow[1]   = 'l' ✅
     flight[1] = 'l' ✅
     prefix = "fl"

i=2  letter = 'o'
     flow[2]   = 'o' ✅
     flight[2] = 'i' ❌ → return "fl"
```

---

## Complexity

| | |
|---|---|
| **Time** | O(n \* m) — n words, m length of shortest word |
| **Space** | O(1) — only storing the prefix string |