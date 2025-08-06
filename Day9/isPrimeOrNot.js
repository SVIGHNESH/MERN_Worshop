// find given number is prime or not
const isPrime = (n) => {
    if (n <= 1)
        {
             return false;
        }
    for (let i = 2; i <= Math.floor(n/2); i++) {
        if (n % i === 0)
            {
                return false;
            } 
    }
    return true;
}

console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(9))





