
  
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val);
      this.left = (left===undefined ? null : left);
      this.right = (right===undefined ? null : right);
  }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
let diameter = Number.NEGATIVE_INFINITY; // Using a more descriptive variable name

function diameterOfBinaryTree(root) {
  diameter = Number.NEGATIVE_INFINITY; // Reset diameter for each call
  d(root);
  return diameter;
}

function d(root) {
  if (root === null) return 0;

  let leftDepth = d(root.left); console.log("leftDepth: ",leftDepth.val);
  let rightDepth = d(root.right); console.log("rightDepth: ",rightDepth.val);

  // Calculate diameter based on current path
  diameter = Math.max(diameter, 1 + leftDepth + rightDepth); console.log("diameter: ",diameter);
console.log(1 + Math.max(leftDepth, rightDepth));
  // Return depth for current node (used for recursive calculations)
  return 1 + Math.max(leftDepth, rightDepth);
}

// Example usage (assuming you have a TreeNode class defined)
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

let treeDiameter = diameterOfBinaryTree(tree);
console.log(treeDiameter); // Output: 3 (diameter of the tree)
