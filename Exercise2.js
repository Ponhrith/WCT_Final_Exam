function formatNum(number) {
    // Convert the number to a string
    let numString = number.toString();

    // Use a regular expression to add commas
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numString;
}

// Take user input and format the number
let userInput = prompt("Enter a number:");
let formattedNumber = formatNum(parseFloat(userInput));

// Display the formatted number
console.log(`Formatted number: ${formattedNumber}`);