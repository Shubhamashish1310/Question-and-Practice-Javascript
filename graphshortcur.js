let v = 7;
const g = new Array(v);
for(let i = 0 ; i < v; i++) g[i] = [];
function addEdge(v1, v2, biDir) {
    g[v1].push(v2); //pushing in that index
    if(biDir) {
        g[v2].push(v1)
    }
}
addEdge(0, 1, true);
addEdge(1, 3, true);
addEdge(3, 2, true);
addEdge(2, 0, true);
addEdge(0, 3, true);
// addEdge(4, 5, true);
// addEdge(5, 6, true);
// addEdge(6, 3, true);
// addEdge(1, 2);
// addEdge(2, 4);
// addEdge(2, 3);
// addEdge(4, 3);

console.log(g);
//testing something not related to question
// let g =[]
// let l =[];
// g.push(l);
// g.push(1);
// console.log(g)