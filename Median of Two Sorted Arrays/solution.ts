// solution 1
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     let sum = nums1.concat(nums2)
//     sum.sort((a, b) => a - b)
//     const mid = Math.floor(sum.length / 2)
//     if (sum.length % 2 === 1) {
//         return sum[mid]
//     } else {
//         return (sum[mid - 1] + sum[mid]) / 2
//     }
// };

//solution 2
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }

    const m = nums1.length
    const n = nums2.length
    let left = 0
    let right = m

    while(left <= right) {
        const cut1 = Math.floor((left + right) / 2)  
        const cut2 = Math.floor((m + n + 1) / 2) - cut1  

        const l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1]
        const l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1]
        const r1 = cut1 === m ? Infinity : nums1[cut1]
        const r2 = cut2 === n ? Infinity : nums2[cut2]

        if(l1 <= r2 && l2 <= r1) {
            
            if((m + n) % 2 === 1) return Math.max(l1, l2)
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
        } else if(l1 > r2) {
            right = cut1 - 1  
        } else {
            left = cut1 + 1   
        }
    }

    return 0
}