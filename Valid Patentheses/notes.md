# Valid Parentheses (LeetCode #20)

## Problem

Given a string with brackets, determine if it is valid. Valid means every opening bracket is closed in the correct order.

```
Input: s = "([)]"  → false
Input: s = "([])"  → true
```

---

## Key Insight

Use a **stack** to remember opening brackets. When we meet a closing bracket — check if the last opened bracket matches it. If not — false.

---

## Algorithm

1. Loop through the string
2. If current character is an opening bracket `(` `[` `{` → push the **expected closing bracket** onto the stack
3. If current character is a closing bracket `)` `]` `}` → check two things:
   - Is the stack empty? (closing bracket with no matching open) → `false`
   - Does `stack.pop()` not equal current character? → `false`
4. After the loop — return `stack.length === 0` (if stack is not empty, some brackets were never closed)

---


## Understanding `stack.pop() !== s[i]`

`stack.pop()` removes and returns the last element from the stack:

```
stack = [')', ']']
stack.pop() → returns ']', stack becomes [')']
```

So when we meet a closing bracket, we compare it with what we **expected**:

```
s = "([)]"

i=0  ( → push ')' → stack = [')']
i=1  [ → push ']' → stack = [')', ']']
i=2  ) → stack.pop() = ']' !== ')' → return false ❌
```

---

## Why `return stack.length === 0`?

After the loop the stack must be empty — all opened brackets were closed:

```
s = "((("

loop passes without errors, but stack = [')', ')', ')']
stack.length !== 0 → return false ❌
```

---

## Complexity

| | |
|---|---|
| **Time** | O(n) — one pass through the string |
| **Space** | O(n) — stack can hold up to n/2 brackets |