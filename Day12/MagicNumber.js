// Magic Number
//A number is magic if the recursive sum of its digits becomes 1.
function isMagicNumber(n) {
    if (n < 0) return false;
    if (n == 0) return false;
    if (n % 9 == 1) return true;
    return false;
}

console.log(isMagicNumber(1));
console.log(isMagicNumber(1234));
console.log(isMagicNumber(12345));