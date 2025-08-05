// InterLeacve Two Strings 
// input : "abc", "123"
//output : "a1b2c3"

let str1 = "abc"
let str2 = "3456"

let result = "";
let i = 0, j = 0;

while (i < str1.length || j < str2.length) {
    if (i < str1.length){
     result += str1[i++];
    }
    if (j < str2.length) 
    {
        result += str2[j++];
    }
}

console.log(result);