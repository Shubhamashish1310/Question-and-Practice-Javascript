class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head of the ll
        this.tail = null; // tail of the ll
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        if(this.head == null) return undefined;
        return this.head.data;
    }

    getTail() {
        if(this.tail == null) return undefined;
        return this.tail.data;
    }

    removeAtHead() {
        if(this.head == null) return; // ll is empty
        const newHead = this.head.next; // we will store the new head
        this.head.next = null; // disconnect the old head from the ll
        this.head = newHead; // allocating the brand new head

        // if head beconmes null after removal of the node means ll is empty now
        if(this.head == null) {
            this.tail = null;
        }
    }

    addAtTail(data) {
        if(this.head == null) {
            // ll is empty
            const newNode = new Node(data);
            this.head = newNode;
            this.tail = newNode;
            return;
        } else {
            const newNode = new Node(data);
            this.tail.next = newNode; // we are attaching the new node after the prev tail
            this.tail = newNode; // we updated the tail property
        }
    }
}

class Queue {
    constructor() {
        this.ll = new LinkedList(); // we will create a brand new empty list
    }
    enqueue(data) {
        this.ll.addAtTail(data);
    }

    dequeue() {
        this.ll.removeAtHead();
    }

    isEmpty() { 
        return this.ll.isEmpty();
    }

    front() {
        return this.ll.getHead();
    }

    back() {
        return this.ll.getTail();
    }
}
/**
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    let q = new Queue()
    let answer = []
    let lev= new Array()
    q.enqueue(root)
    q.enqueue(null)

    while(!q.isEmpty()){
        let curr = q.front();

        if(curr!=null){
            lev.push(curr.val)
            q.dequeue()
            if(curr.left){
                q.enqueue(curr.left)
            }
            if(curr.right){
                q.enqueue(curr.right)
            }
        }
        else{
             q.dequeue()
            if(!q.isEmpty()){
               let sum=0;
               for(i of lev){
                sum+=i
               }
               console.log(sum)
                answer.push(sum)
                q.enqueue(null)
                lev = new Array()
            }
            else{
               let sum=0;
               for(i of lev){
                sum+=i
               }
               console.log(sum)
                answer.push(sum)
            }

        }
    }
    let a = Math.max(...answer)
return (Math.max(answer))
};
// Sample Binary Tree
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  root.left.left = new TreeNode(16);
  root.left.right = new TreeNode(17);
  
  // Call levelOrder function
  const levelTraversal = levelOrder(root);
  console.log(levelTraversal); // Output: [[3], [9, 20], [15, 7]]
  