//countPalindrome 
//Input:("aaa")
//output:6


const str = "aaa";
let count = 0; 
// let revStr = str.split().reverse().join();
// let resStr = str + revStr;
// console.log(resStr.length)

for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
        console.log("i :" , i ,"and j : ",j);
        let mod_Str= str.substring(i,j);
        if(mod_Str == mod_Str.split().reverse().join()){
            count++;
        }
    }
}

console.log(count)