function countofsmallernumberafterself(arr) {
    const result = new Array(arr.length).fill(0);
    const tree = new Array(arr.length + 1).fill(0);
    
    function update(index, value) {
        for (let i = index; i < tree.length; i += i & -i) {
            tree[i] += value;
        }
    }
    
    function query(index) {
        let sum = 0;
        for (let i = index; i > 0; i -= i & -i) {
            sum += tree[i];
        }
        return sum;
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] = query(arr[i]);
        update(arr[i] + 1, 1);
    }
    
    return result;
}

console.log(countofsmallernumberafterself([5, 2, 6, 1]));