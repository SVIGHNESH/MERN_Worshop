// print the 10 prime numbers
const Primenums = (n) => {
   
    let count = 0;
    let num = 2;
    let primes = [];
    while (count < n) {     
        let isPrime = true;
        for (let i = 2; i <= (num / 2) + 1 ; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
            count++;
        }
        num++;
    }
    return primes;
}

console.log(Primenums(10))