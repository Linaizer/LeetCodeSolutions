Fill need from t — how many of each character is required
required = need.size — how many unique characters need to be covered
formed — counter of how many characters are fully covered
right expands the window → add char to window, if window.get(char) === need.get(char) → formed++
When formed === required → window is valid → save minimum (minLen, minStart)
Shrink from left with while → decrease window counter, if it drops below need → formed--, move left++
Return s.slice(minStart, minStart + minLen) or "" if never found



Right finds a valid window → left shrinks it to minimum → repeat