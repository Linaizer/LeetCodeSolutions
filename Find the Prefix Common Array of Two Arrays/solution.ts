function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const seen = new Set()
    let common = 0
    const C: number[] = []

    for (let i = 0; i < A.length; i++) {
        if (seen.has(A[i])) {
            common++
        } else {
            seen.add(A[i])
        }

        if (seen.has(B[i])) {
            common++
        } else {
            seen.add(B[i])
        }

        C[i] = common
    }
    return C
};