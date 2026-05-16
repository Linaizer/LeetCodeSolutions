Sliding Window — Longest Substring Without Duplicates

1) Make two pointers left = 0 and right iterates via for loop

2) Use a Set to track characters in the current window

3) If s[right] is not in Set → add it, update maxLength

4) If s[right] is in Set (duplicate) → shrink window from left with while:

4.1)delete s[left] from Set
4.2) move left++
4.3) repeat until duplicate is gone


5) After while → add s[right] to Set
6) maxLength = Math.max(maxLength, right - left + 1)