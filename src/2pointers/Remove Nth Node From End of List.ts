function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let listnode = new ListNode(0)
    listnode.next = head
    let slow: ListNode | null = listnode
    let fast: ListNode | null = listnode

    for(let i = 0; i < n+1; i++){
        fast = fast!.next
    }

    while(fast !== null){
        fast = fast.next
        slow = slow!.next
    }
    slow!.next = slow!.next!.next

    return head
};


class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

