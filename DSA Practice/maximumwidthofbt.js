var widthOfBinaryTree = function(root) {
    if(root == null) return 0;
    
    let q = new Queue();
    let maxWidth = 0;
    q.enqueue({node: root, index: 1});
    
    while(!q.isEmpty()) {
        let size = q.size();
        let left = q.front().index;
        
        for(let i = 0; i < size; i++) {
            let curr = q.front();
            let node = curr.node;
            let index = curr.index;
            q.dequeue();
            
            if(node.left) {
                q.enqueue({node: node.left, index: 2 * index});
            }
            if(node.right) {
                q.enqueue({node: node.right, index: 2 * index + 1});
            }
            
            if(i === size - 1) {
                maxWidth = Math.max(maxWidth, index - left + 1);
            }
        }
    }
    
    return maxWidth;
}

