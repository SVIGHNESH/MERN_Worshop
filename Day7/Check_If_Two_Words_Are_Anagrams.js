//Check if two strings are anagrams

// Input: "Listen","Silent"
//Output: true


    
    // const first = "listen";
    // const second = "silent";
    
    // if (first.length !== second.length) {
    //    console.log("False")
    // }
    
    // const charCount = {};
    
    
    // for (let i = 0; i < first.length; i++) {
    //     const char = first[i];
    //     charCount[char] = (charCount[char] || 0) + 1;
    // }
    
    // for (let i = 0; i < second.length; i++) {
    //     const char = second[i];
    //     if (!charCount[char]) {
    //         console.log("False")
    //     }
    //     charCount[char]--;
    // }
    
    // console.log("True")


    const word1 = "listen"
    const word2 = "salent"
    if(word1.length !== word2.length){
        console.log("Not a Anagram")

    }
    else{
        for(let i of word1){
            if(word2.includes(i)){
                continue
            }
            else{
                console.log("It is not a Anagram");
                break;

            }
        }
    }
        console.log("It is a anagram ")
    