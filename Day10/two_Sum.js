// two sum 
// input = 1,2
let numbers = [2, 7, 11, 15];
let target = 9;
let result = [];
numbers.forEach((element, index) => {
    let expectedNumber = target - element;
    if (numbers.includes(expectedNumber) && !result.includes(expectedNumber)) {
        result.push(element);
        result.push(expectedNumber);
    }
});
if (result.length > 0) { 
    console.log(`Two numbers that add up to ${target} are: ${result[0]} and ${result[1]}`);
}
else {
    console.log(`No two numbers add up to ${target}`);
}   