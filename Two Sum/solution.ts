function twoSum(nums: number[], target: number): number[] {
  
for ( let i = 0; i< nums.length; i++){
    let current  = target - nums[i]
    let complete = nums.indexOf(current)

    if(complete !== -1 && complete !== i)
    return [i, complete ]
}
    
};