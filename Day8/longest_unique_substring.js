// longest unique substring
// input : "abcabcbb" 
// let start = 0, maxLen = 0, maxSubstr = "", seen = {};
// for (let end = 0; end < s.length; end++) {
//     if (seen[s[end]] !== undefined && seen[s[end]] >= start) {
//         start = seen[s[end]] + 1;
//     }
//     seen[s[end]] = end;
//     if (end - start + 1 > maxLen) {
//         maxLen = end - start + 1;
//         maxSubstr = s.substring(start, end + 1);
//     }
// }
// console.log(maxSubstr)

// let s = "abcabcbb"

// let maxLen = 0, start = 0, maxSubstr = "";
// for (let i = 0; i < s.length; i++) {
//     for (let j = start; j < i; j++) {
//         if (s[j] === s[i]) {
//             start = j + 1;
//             break;
//         }
//     }
//     if (i - start + 1 > maxLen) {
//         maxLen = i - start + 1;
//         maxSubstr = s.substring(start, i + 1);
//     }
// }
// console.log(maxLen);
// console.log(maxSubstr)






let w = "abbacbabcd"
let substring = ""
let length = 0;
for (let i = 0; i < w.length; i++) {
    let sub = " "
    for (let j = i; j < w.length; j++) {
        
        if (sub.includes(w[j])) {
            break
        }
        else {
            sub += w[j]
        }
    }
        if (length < sub.length) {
            length = sub.length
            substring = sub;
        }
    
}

console.log(substring)
console.log(length)























