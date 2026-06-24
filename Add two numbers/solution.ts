class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}



function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let result = []
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1  !== null || l2 !== null) {
        let a = l1 ? l1.val : 0
        let b = l2 ? l2.val : 0

        let total = a + b + carry

        carry = Math.floor(total / 10)
        result.push(total % 10)
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    if (carry > 0) {
        result.push(carry)
    }

for(let num of result){
    current.next = new ListNode(num)
    current = current.next
}

    return dummyHead.next
};