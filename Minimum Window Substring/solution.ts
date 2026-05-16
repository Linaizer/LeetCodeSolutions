function minWindow(s: string, t: string): string {
    const need = new Map<string, number>()
    const window = new Map()

    for (let char of t) {
        need.set(char, (need.get(char) ?? 0) + 1)
    }

    let required = need.size
    let formed = 0
    let left = 0
    let minLen = Infinity
    let minStart = 0

    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        window.set(char, (window.get(char) ?? 0) + 1)

        if(need.has(char)&& window.get(char) === need.get(char)){
            formed++
        }
        while(formed === required){
            if(right - left + 1 < minLen){
                minLen = right - left + 1
                minStart = left
            }
            const leftChar = s[left]
            window.set(leftChar,window.get(leftChar)! - 1)
            if(need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!){
                formed--
            }
            left++
        }

    }
    return minLen === Infinity ? '': s.slice(minStart, minStart + minLen)
};

