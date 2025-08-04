const str = "this342sjahlk232"
let result = '';
// for (let i = 0; i < str.length; i++) {
//     if (!(str[i] >= '0' && str[i] <= '9')) {
//         result += str[i];
//     }
// }
for(let i of str){
    if(!(i.toLowerCase() == i.toUpperCase())){
        result += i
    }

}
console.log(result);
