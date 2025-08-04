// FInd the first non repeating word in the 

// input : "aabbcbbaa"
// output : c 

const word = "aabccc"

for(let i = 0 ;i<word.length;i++){
    let isUnique = true;
    for(let j = 0 ; j < word.length;j++){
        if(i != j && word[i] == word[j]){
            isUnique = false;
            break;
        }
    }
    if(isUnique){
        console.log(word[i]);
    }
}