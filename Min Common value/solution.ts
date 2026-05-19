function getCommon(nums1: number[], nums2: number[]): number {
    const set = new Set(nums2)
    for(let i = 0; i<nums1.length; i++){
       if(set.has(nums1[i])){
        return nums1[i]
       }
    }
    return -1
};