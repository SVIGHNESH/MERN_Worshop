// input : John Ronald Reuel Tolkien
// output : J. R. R. Tolkien

let name = "John Ronald Reuel Tolkien"

let arr = name.split(" ");
let result = "";
let last = arr.pop();
// for (let i = 0; i < arr.length; i++) {
//     if (i < arr.length - 1) {
//         result += arr[i][0] + ". ";
//     } else {
//         result += arr[i];
//     }
// }
// console.log(result);

for(i of arr){
    result += i[0] + ". "
}
result += last;
console.log(result)