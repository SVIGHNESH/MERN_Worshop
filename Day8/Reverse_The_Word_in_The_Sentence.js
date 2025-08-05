//Reverse the word in a sentence 
// input -> Hello World
//output -> World Hello

let senctence = "Hello World";

    let words = [];
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            if (word.length > 0) {
                words.push(word);
                word = '';
            }
        } else {
            word += sentence[i];
        }
    }
    if (word.length > 0) {
        words.push(word);
    }

    let reversed = '';
    for (let i = words.length - 1; i >= 0; i--) {
        reversed += words[i];
        if (i !== 0) {
            reversed += ' ';    
        }
    }
   console.log(reversed)
}

 // Output: World Hello 


