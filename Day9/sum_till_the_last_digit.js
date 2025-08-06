// repeatedly sums the digits of a number unTIL a single digit result

//input : 5456
// output 
function sumTillLastDigit(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            let temp = num % 10;
            sum = sum + temp;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}
console.log(sumTillLastDigit(545)); 