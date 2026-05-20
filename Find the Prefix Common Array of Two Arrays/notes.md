# Prefix Common Array — Solution Note

## Idea
We loop through both arrays simultaneously, tracking seen numbers with a **Set**.
If a number is already in the Set — it appeared in the **other** array earlier, so it's common.

```
A = [1, 3, 2, 4]
B = [3, 1, 2, 4]

i=0: seen={1,3}       → no matches yet         → C[0]=0
i=1: A[1]=3 → in seen! B[1]=1 → in seen!       → C[1]=2
i=2: A[2]=2 → add,  B[2]=2 → in seen!          → C[2]=3
i=3: A[3]=4 → add,  B[3]=4 → in seen!          → C[3]=4
```

## Logic
- At each step we process **A[i]** and **B[i]** as two independent checks
- If the number is **already in seen** → `common++` (the other array saw it first)
- If **not** → add it to seen (waiting for the other array to encounter it)
- Append `common` to result array at every step

## Code
```typescript
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const seen = new Set<number>()
    let common = 0
    const C: number[] = []

    for (let i = 0; i < A.length; i++) {
        if (seen.has(A[i])) common++
        else seen.add(A[i])

        if (seen.has(B[i])) common++
        else seen.add(B[i])

        C[i] = common
    }

    return C
}
```

## Key takeaway
> Process A[i] and B[i] **independently** at each step — a single Set lets us detect
> when both arrays have seen the same number, without scanning the whole array each time.