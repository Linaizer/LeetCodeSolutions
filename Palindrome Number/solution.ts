function isPalindrome(x: number): boolean {
    let reserved = 0
    const original = x

    while(x>0){
        let j = x % 10
        reserved = reserved * 10 + j
        x = Math.floor(x/10)
    }

    return reserved === original
}

function isPalindrome2 (x:number):boolean{
    const strNow = x.toString()
    const palidrome = strNow.split('').reverse().join('')

    return strNow === palidrome
}