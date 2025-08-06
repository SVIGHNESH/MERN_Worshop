// print the 10 prime numbers
const Primenums = (n) => {
   
    let count = 0;
    let num = 2;
    
    while (count < n) {     
        let isPrime = true;
        for (let i = 2; i <= (num / 2) + 1 ; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
           console.log(num)
            count++;
        }
        num++;
    }
    
}

Primenums(10)