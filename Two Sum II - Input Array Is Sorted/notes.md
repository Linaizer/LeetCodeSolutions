Take the first and last elements of the array (two pointers: left and right).
While left < right — calculate the sum of two numbers:

sum equals target → return the indices
sum is less than target → move left right (need a bigger number)
sum is greater than target → move right left (need a smaller number)

Works because the array is sorted — we always know which direction to move.