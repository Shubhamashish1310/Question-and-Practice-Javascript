const array = [0,2,4,6];
const sum = +(eval(array.join("+"))); // Not recommended

console.log(sum); // Output: 20 (might work for simple arrays)
