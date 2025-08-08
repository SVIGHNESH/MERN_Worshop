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

let word1 = "sylent"
let word2 = "listen"
let merg = {}
if (word1.length != word2.length) {
    console.log("THey are not a Anagram");
}
    for (let i of word1) {
        if (merg[i]) {
            merg[i] = (merg[i] || 0) + 1
        }
        else {
            merg[i] = 1
        }
    }
    for (let i of word2) {
        if (merg[i]) {
            merg[i]--;
        }
        else {
            console.log("not a anagram")
        }
    }
    for (let key in merg) {
        if (merg[key] !== 0) {
            console.log("not anagram");
            return;
        }
    }
    console.log("anagram");
