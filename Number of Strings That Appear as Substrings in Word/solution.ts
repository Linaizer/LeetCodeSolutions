function numOfStrings(patterns: string[], word: string): number {
    let count = 0
    for ( let i = 0; i< patterns.length; i++){
        if(word.includes(patterns[i])){
            count++
        }
    }
    return count
};