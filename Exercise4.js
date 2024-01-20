function measureDepth(arr) {
    if (!Array.isArray(arr)) {
        return 0; // Not an array, depth is 0
    }

    let maxDepth = 1; // Default depth is 1 for a non-empty array

    for (let element of arr) {
        if (Array.isArray(element)) {
            // If the element is an array, recursively measure its depth
            const elementDepth = 1 + measureDepth(element);
            // Update the max depth if the current element's depth is greater
            maxDepth = Math.max(maxDepth, elementDepth);
        }
    }

    return maxDepth;
}

// Example usage:
console.log(measureDepth([[]])); 
console.log(measureDepth([[[]]])); 
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); 