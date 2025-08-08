//check two words anagram or not


const word1 = "listen";
const word2 = "silent";

if(word1.length !== word2.length) {
    console.log("Not A Anagram.")
}

const charCount = {};


for (let i = 0; i < word1.length; i++) {
    const char = word1[i];
    charCount[char] = (charCount[char] || 0) + 1;
}           

for (let i = 0; i < word2.length; i++) {
    const char = word2[i];
    if (!charCount[char]) {
        console.log("False")
    }
    charCount[char]--;
}

console.log("They are the anagrams")
