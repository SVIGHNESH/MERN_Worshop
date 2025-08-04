function countWords(str) {
    let count = 0;
    let inWord = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && str[i] !== '\n' && str[i] !== '\t') {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    return count;
}

// Example usage:
const text = "Hello world! This is a test.";
console.log(countWords(text)); // Output: 6