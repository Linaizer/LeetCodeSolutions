function countMajoritySubarrays(nums: number[], target: number): number {
    let count = 0
    let calculate = target
    for (let i = 0; i < nums.length; i++) {
        calculate = 0
        for (let j = i; j < nums.length; j++) {
            const arrLength = j - i + 1
            if (nums[j] === target) {
                calculate++
            }
            if (calculate > arrLength / 2) {
                count++
            }
        }
    }
    return count
};