// Automorphic Number
// A number is automorphic if its square ends in the same digits as the number.

// Example: 76 → 76² = 5776 → ends with 76

function isAutomorphic(n) {
    const square = n * n;
    const nLength = n.toString().length;
    let pow10 = 1;
    for (let i = 0; i < nLength; i++) {
        pow10 *= 10;
    }
    const lastDigits = square % pow10;
    return lastDigits === n;
}

console.log(isAutomorphic(76));
console.log(isAutomorphic(25));
console.log(isAutomorphic(376));
console.log(isAutomorphic(625));
console.log(isAutomorphic(95));