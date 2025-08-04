// find the most frequent charachter 
// input : "javascript"
// output : "a"

const str = "vighnesh"

const charCount = {};
for(let i = 0 ; i < str.length;i++){
    const char = str[i];
    if(charCount[char]){
        charCount[char]++;
    }
    else{
        charCount[char] = 1 ;
    }
}
let mostFrequentChar = '';
let maxCount = 0;

 for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            mostFrequentChar = char;
        }
    }

    console.log(mostFrequentChar);