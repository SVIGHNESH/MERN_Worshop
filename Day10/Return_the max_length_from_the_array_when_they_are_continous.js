// [101,102,103,1,2,3,104,105,5,6,7]
let n = [101,102,103,1,2,3,104,105,5,6,7]
n.sort((a, b) => a - b); // Sort the array first
let length =1;
let maxLen =0;
 for(let i = 0; i < n.length ; i++) {
    if (n[i] == n[i-1]  + 1) {
        length++;
    }
    else{
        length =1 
    }
    if(maxLen < length){
        maxLen = length;
    }

}

console.log(maxLen);
























// function maxContinuousLength(arr) {
//     if (!arr.length) return 0;
//     let maxLen = 1, currLen = 1;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1] + 1) {
//             currLen++;
//             if (currLen === 2) {
//                 var startIdx = i - 1;
//             }
//             if (i === arr.length - 1 || arr[i + 1] !== arr[i] + 1) {
//                 if (!result) var result = [];
//                 result.push(arr.slice(startIdx, i + 1));
//             }
//         } else {
//             maxLen = Math.max(maxLen, currLen);
//             currLen = 1;
//         }
//     }
//     return Math.max(maxLen, currLen);
// }

// const arr = [101,102,103,1,2,3,104,105,5,6,7];
// console.log(maxContinuousLength(arr)); // Output: 3