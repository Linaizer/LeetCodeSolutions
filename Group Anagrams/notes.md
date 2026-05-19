# Group Anagrams — Solution Note

## Idea
We loop through each word in the array, sort its letters to get a **key**, and group words using a **Map**.

Anagrams always produce the **same key** after sorting:
```
"eat" → "aet"
"tea" → "aet"  ← same key, same group!
"tan" → "ant"
```

## Logic
- If the key **already exists** in the Map → push the word into that array
- If the key **doesn't exist** → create a new array with that word
- At the end → return all **Map values** as the result

## Code
```typescript
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()

    for (const word of strs) {
        const wordKey = word.split('').sort().join('') // "eat" → "aet"

        if (map.has(wordKey)) {
            map.get(wordKey)?.push(word)  // add to existing group
        } else {
            map.set(wordKey, [word])      // create new group
        }
    }

    return Array.from(map.values())
}
```

## Key takeaway
> Anagrams produce the **same sorted key**, so a Map lets us group them together efficiently.