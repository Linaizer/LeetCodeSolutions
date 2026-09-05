Problem: First Stable Index

Approach: Two-pass precomputation (prefix max + suffix min), then linear scan.

Key insight: Instead of recalculating max(nums[0..i]) and min(nums[i..n-1]) from scratch for every i (which would be O(n²)), precompute both in O(n) using two auxiliary arrays built incrementally:

prefixMax[i] = max of all elements from index 0 to i → built left-to-right: prefixMax[i] = Math.max(prefixMax[i-1], nums[i])
suffixMin[i] = min of all elements from index i to n-1 → built right-to-left: suffixMin[i] = Math.min(suffixMin[i+1], nums[i])

Then a single pass checks prefixMax[i] - suffixMin[i] <= k for each i, left to right, returning the first match.

Complexity: O(n) time, O(n) space (three arrays).

ts
function firstStableIndex(nums: number[], k: number): number {
  const prefixMax: number[] = [];
  const suffixMin: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    prefixMax[i] = i === 0 ? nums[0] : Math.max(prefixMax[i - 1], nums[i]);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    suffixMin[i] = i === nums.length - 1 ? nums[i] : Math.min(suffixMin[i + 1], nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (prefixMax[i] - suffixMin[i] <= k) return i;
  }

  return -1;
}

Pattern to remember: "Precompute prefix/suffix aggregates in one pass each, then combine in a final pass" — this pattern generalizes to many array problems where you need info from both directions relative to each index (not just max/min — sums, counts, etc. work the same way).