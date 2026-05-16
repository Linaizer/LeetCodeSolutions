function lengthOfLongestSubstring(s: string): number {
    let left = 0
    let maxLength = 0

    const seen = new Set<string>()
    for (let right = 0; right < s.length; right++) {
        if (!seen.has(s[right])) {
            seen.add(s[right])
            maxLength = Math.max(maxLength, right - left + 1)
        } else {
            while (seen.has(s[right])) {
                seen.delete(s[left])
                left++
            }
            seen.add(s[right])
        }
    }
    return maxLength
};