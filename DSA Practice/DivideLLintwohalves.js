class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function divideLinkedList(head) {
    // Find the middle node of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Break the linked list at the middle node
    const middle = slow;
    slow.next = null;
  
    // turn the twot
    let prev = null;
    let current = middle
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return [middle, prev]; // middle = prev;
  
    
  }
  
  // Example usage:
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  
  const [head1, head2] = divideLinkedList(head);
  
  console.log(head1.data); // 1
  console.log(head2.data); // 3