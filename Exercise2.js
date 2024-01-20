function formatNum(number) {
    
    let numString = number.toString();

    
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numString;
}


let userInput = prompt("Enter a number:");
let formattedNumber = formatNum(parseFloat(userInput));


console.log(`Formatted number: ${formattedNumber}`);