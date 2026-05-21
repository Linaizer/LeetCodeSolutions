# Longest Common Prefix — Solution Note

## Idea
Extract all prefixes from `arr1` into a **Set**, then for each number in `arr2`
check its prefixes against that Set — longest match wins.

```
arr1 = [1, 10, 100]  →  prefixSet = {1, 10, 100}
arr2 = [1000]

x = 1000 → not in Set → trim
x = 100  → in Set! → length 3 → break

answer = 3
```

## Logic
- Trimming last digit via `Math.floor(x / 10)` generates all prefixes: `12345 → 1234 → 123 → 12 → 1`
- In Step 2 we go **long → short**, so the **first hit is already the longest** for that number → `break` immediately
- `Math.max` tracks the best result **across all numbers** in `arr2`

## Code
```typescript
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixSet = new Set<number>();

    for (const num of arr1) {
        let x = num;
        while (x > 0) {
            prefixSet.add(x);
            x = Math.floor(x / 10);
        }
    }

    let maxLen = 0;

    for (const num of arr2) {
        let x = num;
        while (x > 0) {
            if (prefixSet.has(x)) {
                maxLen = Math.max(maxLen, String(x).length);
                break;
            }
            x = Math.floor(x / 10);
        }
    }

    return maxLen;
}
```

## Key takeaway
> Build a Set of **all prefixes** from `arr1` once — then each `arr2` number
> just walks from long to short until it hits a match. No nested loops needed.