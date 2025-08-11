// Kaprekar Number 
//A number n is Kaprekar if: n^2 can be split into two parts that sum to n.

//Example: 45 → 45² = 2025 → 20 + 25 = 45
function isKaprekar(n) {
    if (n < 0) return false;
    if (n <= 1) return true;

    const sq_n = n * n;
    const numStr = sq_n.toString();
    const len = numStr.length;

    for (let i = 1; i < len; i++) {
        const right = parseInt(numStr.slice(len - i));
        const left = parseInt(numStr.slice(0, len - i));

        if (left + right === n) {
            return true;
        }
    }

    return false;
}
console.log(isKaprekar(45));

