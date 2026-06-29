// solution 1
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let sum = nums1.concat(nums2)
    sum.sort((a, b) => a - b)
    const mid = Math.floor(sum.length / 2)
    if (sum.length % 2 === 1) {
        return sum[mid]
    } else {
        return (sum[mid - 1] + sum[mid]) / 2
    }
};