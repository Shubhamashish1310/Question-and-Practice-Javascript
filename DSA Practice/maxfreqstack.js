
// var FreqStack = function() {
//     this.freqMap = {};
//     this.maxFreq = 0;
//     this.elementMap = {};
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// FreqStack.prototype.push = function(val) {
//     if(!this.freqMap[val]) {
//         // value is not present in the map
//         this.freqMap[val] = 1;
//     } else {
//          // value is present in the map
//         this.freqMap[val]+=1;
//     }
    
//     this.maxFreq = Math.max(this.maxFreq, this.freqMap[val]);
//     // add the entry in element map
//     const frequency = this.freqMap[val];
//     if(!this.elementMap[frequency]) {
//         this.elementMap[frequency] = [val];
//     } else {
//         this.elementMap[frequency].push(val);
//     }
// };

// /**
//  * @return {number}
//  */
// FreqStack.prototype.pop = function() {
//     const arr = this.elementMap[this.maxFreq]
//     const result = arr[arr.length - 1];  // get the last element of arr[inx]
//     this.elementMap[this.maxFreq].pop();
//     this.freqMap[result]--;
//     if(this.elementMap[this.maxFreq].length == 0) {
//         delete this.elementMap[this.maxFreq];
        
//         this.maxFreq -= 1;
//     }
//     return result;
// };

// /** 
//  * Your FreqStack object will be instantiated and called as such:
//  * var obj = new FreqStack()
//  * obj.push(val)
//  * var param_2 = obj.pop()
//  */

var FreqStack = function () {
    this.fr = {};
    this.maxfr = 0;
    this.efr = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    if (!this.fr[val]) {
        this.fr[val] = 1;
    }
    else {
        this.fr[val] += 1
    }

    this.maxfr = Math.max(this.maxfr, this.fr[val]);

    let freq = this.fr[val]
    if (!this.efr[freq]) {
        this.efr[freq] = [val]
    }
    else {
        this.efr[freq].push(val)
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let arr = this.efr[this.maxfr]
//   let res = arr[arr.length-1]
const res = arr[arr.length - 1];
arr.pop()
  this.fr[res]--
  if(this.efr[this.maxfr].length ==0){
    delete this.efr[this.maxfr]
  }
this.maxfr-=1
return res
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */