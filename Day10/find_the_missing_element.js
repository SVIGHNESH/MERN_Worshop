// find the missing number from the array 
// inp : 1,2,3,4,5,6,7,9
// output : 8

let numbers = [1,2,3,4,5,6,7,9,10]
numbers.forEach(element => {
    let expectedNumber = element + 1;
    if(expectedNumber < 10){
        if (!numbers.includes(expectedNumber)) {
            console.log(`Missing number is: ${expectedNumber}`);
        }   
    }
});

