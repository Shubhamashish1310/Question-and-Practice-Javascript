/**
 * @param {number[][]} grid
 * @return {number}
 */
let arr;
let dp;
let rows
let cols
function f(c,r){
   if(r==rows&&c==cols)return dp[r][c] = arr[r][c]
   if(dp[r][c]!=-1)return dp[r][c]

   if(c<cols){
     down=  f(r,c+1)
   }
   else{down =  Infinity;}
   if(r<rows){
     right=  f(r+1,c)
   }
   else{right =  Infinity;}

   arr[r][c] += Math.min(right,down)
   return   dp[r][c] = arr[r][c]
}
var minPathSum = function(grid) {
   arr = grid
   cols = grid.length-1
   rows = grid[0].length-1
   dp = Array.from({length:cols+1},()=>Array(rows+1).fill(-1))

   return f(0,0)

};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));