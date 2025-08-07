// find the 2 missing from given array 
let numbers = [1, 2, 3, 6, 7, 8, 9]
let missing = []
numbers.forEach((element, index) => {
    let expectedNumber = element + 2
    if (expectedNumber > 10) {
        console.log("Length reached ");
        return
    }
    if (!numbers.includes(expectedNumber)) {
        missing.push(expectedNumber)
        console.log(`Missing number is: ${expectedNumber}`);
    }
});

console.log(missing);
// Output: Missing number is: 4
// Output: Missing number is: 5 