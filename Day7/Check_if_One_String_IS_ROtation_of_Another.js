const str1= "hello"
const str2= "ellot"

//  if (str1.length !== str2.length) {
//         console.log("False")
//     }
    
//     // Generate all possible rotations of str1
//     for (let i = 0; i < str1.length; i++) {
//         const rotation = str1.slice(i) + str1.slice(0, i);
//         if (rotation === str2) {
//           console.log("TRUE")
//         }
//     }
//     console.log("FALSE")

let str3 = str1+str1;
console.log(str3)
if(str3.includes(str2)){
    console.log("TRUE")
}
else{
    console.log("FALSE")

}