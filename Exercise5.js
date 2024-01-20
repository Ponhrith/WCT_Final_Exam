const readline = require('readline');

function longestZero(sequence) {
    const zeroChar = sequence.includes('0') ? '0' : '1';
    const oneChar = zeroChar === '0' ? '1' : '0';

    if (!sequence.includes('0')) {
        return "";
    }

    const sequences = sequence.split(oneChar);

    const longestSequence = sequences.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");

    return longestSequence;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a binary sequence: ", (userInput) => {
    rl.close();

    const result = longestZero(userInput);
    console.log(`Longest consecutive sequence of zeros: ${result}`);
});
