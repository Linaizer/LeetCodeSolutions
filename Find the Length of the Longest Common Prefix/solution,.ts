function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixSet = new Set<number>()

    for(const num of arr1){
        let x = num
        while (x > 0){
            prefixSet.add(x)
            x = Math.floor(x/10)
        }
    }
    let maxLen = 0

    for(const num of arr2){
        let x = num
        while(x > 0){
            if(prefixSet.has(x)){
                maxLen = Math.max(maxLen, String(x).length)
                break;
            }
            x  = Math.floor(x/10)
        }
    }
    return maxLen
};