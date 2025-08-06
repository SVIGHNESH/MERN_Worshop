let number = 343434;
const isEvenOrOdd = (n) => {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10);
    }
    return sum % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(number));