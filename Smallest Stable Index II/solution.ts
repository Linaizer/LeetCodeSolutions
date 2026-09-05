function firstStableIndex(nums: number[], k: number): number {
   let prefixMax = []
   let sufferMin = []
  for (let i = 0; i < nums.length; i++) {
  prefixMax[i] =  i === 0 ? nums[0] : Math.max(prefixMax[i-1],nums[i])
}
for (let i = nums.length - 1; i >= 0; i--) {
  sufferMin[i] = i === nums.length - 1  ? nums[i] : Math.min(sufferMin[i+1], nums[i])
}

for (let i = 0; i < nums.length; i++){
    if(prefixMax[i] - sufferMin[i] <= k){
        return i
    }
}
return -1


};