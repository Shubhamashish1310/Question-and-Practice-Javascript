
let history = [];

function addToHistory(page) {
    history.push(page);
}

// Function to go back to the previous page
function goBack() {
    if (history.length > 1) {
        history.pop();
        let previousPage = history[history.length - 1];
        console.log("Going back to: " + previousPage);
    } else {
        console.log("Can't go back any further");
    }
}

// Function to go forward to the next page
function goForward() {
    // Implement this function if needed
}

// Example usage
addToHistory("www.example.com/page1");
addToHistory("www.example.com/page2");
addToHistory("www.example.com/page3");

console.log("Current page: " + history[history.length - 1]);

goBack();