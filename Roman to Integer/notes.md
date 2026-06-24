# Roman to Integer (LeetCode #13)

## Problem

Given a roman numeral string, convert it to an integer.

```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, IV = 4
```

---

## Key Insight

Roman numerals go largest to smallest left to right — **except** when a smaller symbol appears before a larger one (like `IV`, `XC`, `CM`). In that case we subtract instead of add.

**Rule:** if `current < next` → subtract, else → add.

---

## Algorithm

1. Create an object with all Roman symbols and their values
2. Loop through the string until done
3. At each step get `current` value and `next` value (`i + 1`)
4. If `current` is lower than `next` → decrement result by `current`
5. Else → add `current` to result


## Walkthrough Example

```
s = "MCMXCIV"

i=0  M(1000) < C(100)?  No  → +1000  result = 1000
i=1  C(100)  < M(1000)? Yes → -100   result = 900
i=2  M(1000) < X(10)?   No  → +1000  result = 1900
i=3  X(10)   < C(100)?  Yes → -10    result = 1890
i=4  C(100)  < I(1)?    No  → +100   result = 1990
i=5  I(1)    < V(5)?    Yes → -1     result = 1989
i=6  V(5)    < undefined? No → +5    result = 1994 ✅
```

---

## Complexity

| | |
|---|---|
| **Time** | O(n) — one pass through the string |
| **Space** | O(1) — map size is fixed (only 7 symbols) |