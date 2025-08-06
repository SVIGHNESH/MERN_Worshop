// let number = 12345678;
// const isEvenOrOdd = (n) => {
//     let sum = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         sum += digit;
//         n = Math.floor(n / 10);
//     }
//     return sum % 2 === 0 ? "Even" : "Odd";
// }
// console.log(isEvenOrOdd(number));


// find sum of even numbers and odd numbers from given number
// input: 12345678 => even = 2+4+6+8 ; odd = 1+3+5+7

const sumEvenOdd = (n) => {
    let evenSum = 0;
    let oddSum = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
        n = Math.floor(n / 10);
    }
   console.log(evenSum)
   console.log(oddSum)
}
sumEvenOdd(123456768) // Output: { evenSum: 20, oddSum: 16 }
