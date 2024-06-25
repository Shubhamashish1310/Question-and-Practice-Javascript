let v = 7;
const g = new Array(v);
for(let i = 0 ; i < v; i++) g[i] = [];
function addEdge(v1, v2, biDir = true) {
    g[v1].push(v2);
