// let number = 1234
// console.log(number%10)
// number = Math.floor(number/10)
// console.log(number)


// let number = 1234
// let count = 0;
// while(number > 0 ){
//    number =  Math.floor(number/10)
//     count++
// }

// console.log(count)


//find the sum of the number 
// number = 1234 
// output = 1+2+3+4

let number = 1234
let sum = 0;
let temp = 0 ;
while(number >0){
    temp = number % 10 
    sum += temp;
    temp = 0
    number = Math.floor(number/10)
}
//this is from the branch 1 
console.log(sum )