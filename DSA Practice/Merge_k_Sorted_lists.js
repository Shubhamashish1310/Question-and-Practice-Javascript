/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
    constructor() {
        this.arr = [];
    }

    upheapify(idx) {
        // idx represents the index to start upheapify from
        while (idx > 0) {
            // till the time idx doesn't reach the root
            let pi = Math.floor((idx - 1) / 2); // parent index
            if (this.arr[pi] > this.arr[idx]) {
                // parent is larger than current element

                // swap the parent and child
                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;

                idx = pi;
            } else {
                // everything is good, we have a heap
                break;
            }
        }
    }

    insert(data) {
        // 1. Insert this data in your array
        this.arr.push(data);

        // 2. upheapify
        this.upheapify(this.arr.length - 1);
    }

    downheapify(idx) {
        while (idx < this.arr.length) {
            // 1. Calculate the lc and rc index
            let lc = 2 * idx + 1; // possible left child index
            let rc = 2 * idx + 2; // possible right child index
            let minEl = idx; // assume root is the smallest

            if (lc < this.arr.length && this.arr[lc] < this.arr[minEl]) {
                // left child exists and is smaller
                minEl = lc;
            }

            if (rc < this.arr.length && this.arr[rc] < this.arr[minEl]) {
                // right child exists and is smaller
                minEl = rc;
            }

            // after the above comparison, we know the smallest element
            if (idx === minEl) {
                // root is still the smallest element, don't go further
                break;
            } else {
                // swap the element of root and minEl
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[minEl];
                this.arr[minEl] = temp;

                idx = minEl;
            }
        }
    }

    remove() {
        if (this.arr.length === 0) return;
        // remove the highest priority element (smallest in min-heap)

        // 1. Swap the root with the last element
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        // 2. Remove the last element
        this.arr.pop();

        // 3. Downheapify
        this.downheapify(0);
    }

    top() {
        return this.arr[0];
    }
}


var mergeKLists = function(lists) {
    let mh=new MinHeap()
    for(n of lists){
       if(n.length>1){
         for(m of n){
            mh.insert(m)
        }
       }
       else{
        mh.insert(n)
       }
    }
    let res=[]
   while(mh.top()){
    
   res.push(mh.top())
   mh.remove()
   }
return res
};


