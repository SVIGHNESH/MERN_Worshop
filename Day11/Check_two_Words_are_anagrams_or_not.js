//check two words anagram or not


const first = "listen";
const second = "silent";

if(first.length !== second.length) {
    console.log("Not A Anagram.")
}

const charCount = {};


for (let i = 0; i < first.length; i++) {
    const char = first[i];
    charCount[char] = (charCount[char] || 0) + 1;
}

for (let i = 0; i < second.length; i++) {
    const char = second[i];
    if (!charCount[char]) {
        console.log("False")
    }
    charCount[char]--;
}

console.log("True")
