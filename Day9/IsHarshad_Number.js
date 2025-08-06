// let num = 1234

// let sum = 0;
// while(num > 0){
//     sum += num%10;
//     num = Math.floor(num/10)
// }

// console.log(sum%num == 0 ? "It is a harshad number" : "It is not a harshad number ")


let num = 1234
const isHarshad = (a)=>{
    let sum = 0
    while(a > 0){
     sum += a%10;
     a = Math.floor(a/10)
 }
 return sum%num == 0 ? "It is a harshad number" : "It is not a harshad number "
}

console.log(isHarshad(num))