// Perfect number is a number that is equal to the sum of its proper divisors (excluding itself).
// Example: 6 
const isPerfectNumber = (n) => {
   
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
console.log(isPerfectNumber(6));  