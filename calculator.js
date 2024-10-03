
const inputNo = document.getElementById('inputText');
const inputButton = document.querySelectorAll('button');

// Function to calculate the result
function calculate(expression) {
    console.log(expression);
    console.log(typeof(expression));
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed operation';
    }
}

// Function to handle button clicks and perform operations
function operation(ValueButton) {
    if (ValueButton === 'C') {
        inputNo.value = ''; // Clear input
    } else if (ValueButton === 'DEL') {
        inputNo.value = inputNo.value.slice(0, -1); // Delete last character
    } else if (ValueButton === '=') {
        inputNo.value = calculate(inputNo.value); // Calculate the result
    } else {
        inputNo.value += ValueButton; // Append button value to input
    }
}

// Add event listener to each button
inputButton.forEach(button => {
    let ValueButton = button.innerText;
    button.addEventListener('click', function () {
        operation(ValueButton);
    });
});