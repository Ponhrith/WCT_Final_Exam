function packedBoxes(totalItems) {
    const boxes = [];

    while (totalItems >= 3) {
        if (totalItems % 3 === 0) {
            // If remaining items are divisible by 3, pack a box of 3
            boxes.push(3);
            totalItems -= 3;
        } else {
            // Otherwise, pack a box of 5
            boxes.push(5);
            totalItems -= 5;
        }
    }

    // Sorting using a custom comparator
    boxes.sort((a, b) => a - b);

    return totalItems === 0 ? boxes : [];
}

// Example usage:
console.log(packedBoxes(11));  
console.log(packedBoxes(15));  
console.log(packedBoxes(17));  
console.log(packedBoxes(7));  
