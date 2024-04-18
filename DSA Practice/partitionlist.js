function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var partition = function(head, x) {
    let dummyless = new ListNode(-1);
    let dummyhigh = new ListNode(-1);
    let less = dummyless;
    let gr = dummyhigh;

    let curr = head;
    while (curr != null) {
        if (curr.val >= x) {
            gr.next = curr;
            gr = gr.next;
        } else {
            less.next = curr;
            less = less.next;
        }
        curr = curr.next;
    }
    console.log(dummyhigh,dummyless,less,gr);
    gr.next = null;
    console.log(gr);
    less.next = dummyhigh.next;
    return dummyless.next;
};

// Test case
let node1 = new ListNode(1);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
let node4 = new ListNode(2);
let node5 = new ListNode(5);
let node6 = new ListNode(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let x = 3;

console.log("Original list:");
let current = node1;
while (current != null) {
    console.log(current.val);
    current = current.next;
}

let partitioned = partition(node1, x);

console.log("Partitioned list:");
current = partitioned;
while (current != null) {
    console.log(current.val);
    current = current.next;
}
