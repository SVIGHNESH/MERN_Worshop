// check  whether the number is palindrome or not 
// input : 1234
// output : false

let number = 1234
let rev_num = 0;
let temp = number;
while (temp > 0) {
    rev_num = rev_num * 10 + temp % 10;
    temp = Math.floor(temp / 10);
}
console.log(rev_num === number);