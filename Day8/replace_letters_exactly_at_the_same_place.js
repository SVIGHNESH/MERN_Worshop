//input : "a-bC-dEF-ghIj"
//outout : "j-Ih,gfE,dCba"
// let s = "a-bC-dEF-ghIj"
//     const letters = s.match(/[a-zA-Z]/g) || [];
//     let result = '';
//     let letterIndex = letters.length - 1;
//     for (let i = 0; i < s.length; i++) {
//         if (/[a-zA-Z]/.test(s[i])) {
//             result += letters[letterIndex--];
//         } else {
//             result += s[i];
//         }
//     }
//     console.log(result);














// let s = "a-bC-dEF-ghIj";
// let letters = [];
// for (let i = 0; i < s.length; i++) {
//     if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
//         letters.push(s[i]);
//     }
// }
// let result = '';
// let letterIndex = letters.length - 1;
// for (let i = 0; i < s.length; i++) {
//     if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
//         result += letters[letterIndex];
//         letterIndex--;
//     } else {
//         result += s[i];
//     }
// }
// console.log(result);


//input : "a-bC-dEF-ghIj"
// Output: "j-Ih-gFE-dCba"



let str = "a-bC-dEF-ghIj"
let alpha = ""
let result = ""
for(let i of str){
    if(!(i.toLowerCase() == i.toUpperCase())){
         alpha = i + alpha
    }
}

console.log(alpha)


let alphaIndex = 0;
for(let i of str){
    if(!(i.toLowerCase() == i.toUpperCase())){
        result += alpha[alphaIndex++];
    }
    else{
        result += i;
    }
}
console.log(result)



