// Strong number 
// sum of the digit factorial equal the number 
const findFactorial = (n) => {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

const isStrong = (number)=>{
    let temp = number;
    let sum = 0;
    let originalNumber = number;
    
    while(number > 0){
        temp = number % 10;
        sum += findFactorial(temp);
        number = Math.floor(number / 10);
    }
    return sum === originalNumber;

}
console.log(isStrong(145))