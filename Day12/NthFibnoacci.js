//Nth Fibonacci Number
//Get the nth Fibonacci number: 0, 1, 1, 2, 3, 5, 8,...

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci:", fibonacci(7)); 