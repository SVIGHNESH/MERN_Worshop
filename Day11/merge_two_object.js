let data1 = {1:5,2:10,3:15}
let data2 = {1:7,4:10,3:10}

 let result = {};

// for (let key in data1) {
//     result[key] = data1[key] + (data2[key] || 0);
// }

// for (let key in data2) {
//     if (!(key in data1)) {
//         result[key] = data2[key];
//     }
// }

// console.log(result);



for(let key in data1){
    result[key] = data1[key]
}
for(let key in data2){
    result[key] = (result[key] && result[key]+data2[key]) || data2[key]

}
console.log(result);