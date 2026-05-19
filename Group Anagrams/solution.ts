function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()

    for (const word of strs) {
        const wordKey = word.split('').sort().join('')
        if (map.has(wordKey)) {
            map.get(wordKey)?.push(word)
        } else {
            map.set(wordKey, [word])
        }
    }
 return Array.from(map.values())
};