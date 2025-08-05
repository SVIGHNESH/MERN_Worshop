// input : John Ronald Reuel Tolkien
// output : J. R. R. Tolkien

let name = "Vighnesh Shukla"

let arr = name.split(" ");
let result = "";
for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
        result += arr[i][0] + ". ";
    } else {
        result += arr[i];
    }
}
console.log(result);
