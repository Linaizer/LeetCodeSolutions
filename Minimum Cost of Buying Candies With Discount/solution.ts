function minimumCost(cost: number[]): number {
    const sorted = cost.sort((a, b) => b - a)
    let acc = 0
    for (let i = 0; i < sorted.length; i++) {

        if (i % 3 === 2) {
           continue
        } else {
           acc += sorted[i]
        }
    }
    return acc
};