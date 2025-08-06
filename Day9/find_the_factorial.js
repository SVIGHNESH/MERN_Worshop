// find the factorial of the given number
// 4 = 4*3*2*1 = 24
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
console.log(findFactorial(5)); 