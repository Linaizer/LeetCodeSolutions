# Number of Strings That Appear as Substrings in Word (LeetCode #1967)

## Problem

Given an array `patterns` and a string `word`, return how many strings from `patterns` exist as a substring in `word`.

```
Input: patterns = ["a","abc","bc","d"], word = "abc"
Output: 3
```

---

## Key Insight

Use the built-in `.includes()` method to check if a string exists inside another string:

```typescript
"abc".includes("bc")  // true
"abc".includes("d")   // false
```

---

## Algorithm

1. Create a `count` variable starting at `0`
2. Loop through `patterns`
3. If `word.includes(pattern)` → increment `count`
4. If not → skip and continue (do NOT return early!)
5. Return `count`

---

## Solution (TypeScript)

```typescript
function numOfStrings(patterns: string[], word: string): number {
    let count = 0;

    for (let i = 0; i < patterns.length; i++) {
        if (word.includes(patterns[i])) {
            count++;
        }
    }

    return count;
}
```

---

## Why `count++`?

`count++` is just a short way to write `count = count + 1`:

```
count = 0
word.includes("a")   → true  → count++ → count = 1
word.includes("abc") → true  → count++ → count = 2
word.includes("bc")  → true  → count++ → count = 3
word.includes("d")   → false → skip

return 3 ✅
```

---

## Common Mistake

```typescript
} else {
    return count  // ❌ exits the function on first miss!
}
```

If first pattern doesn't match — you return `0` immediately without checking the rest. Just remove the `else` block.

---

## Complexity

| | |
|---|---|
| **Time** | O(n \* m) — n patterns, m length of word |
| **Space** | O(1) — only the counter |