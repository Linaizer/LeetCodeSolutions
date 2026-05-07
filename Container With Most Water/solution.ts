function maxArea(height: number[]): number {
    let left = 0
    let right = height.length -1
    let max = 0
    while(left < right){
        const maxWater = Math.min(height[left],height[right]) * (right - left)
        max = Math.max(max,maxWater)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return max
}