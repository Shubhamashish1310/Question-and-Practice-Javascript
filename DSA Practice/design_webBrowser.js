var Node = function(val, next, pre) {
    this.val = val;
    this.next = null;
    this.pre = null;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
        this.homepage = new Node(homepage);
        this.curr = this.homepage;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.curr.next = new Node(url, null, this.curr);
    this.curr = this.curr.next;
    return null;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps && this.curr.pre) {
        this.curr = this.curr.pre;
        steps--;
    }
    return this.curr.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps && this.curr.next) {
        this.curr = this.curr.next;
        steps--;
    }
    return this.curr.val;
};  


var a = new BrowserHistory("www.google.com");
console.log(a.visit("www.facebook.com"));
