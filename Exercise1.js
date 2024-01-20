function canNest(arr1, arr2) {
    const arr1Min = arr1.reduce((min, val) => Math.min(min, val)), arr2Min = arr2.reduce((min, val) => Math.min(min, val));
    const arr1Max = arr1.reduce((max, val) => Math.max(max, val)), arr2Max = arr2.reduce((max, val) => Math.max(max, val));

    return arr1Min > arr2Min && arr1Max < arr2Max;
}

console.log(canNest([9,9,8], [8,9])); 