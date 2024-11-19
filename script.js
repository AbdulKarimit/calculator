// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to calculate the result of the expression
function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
