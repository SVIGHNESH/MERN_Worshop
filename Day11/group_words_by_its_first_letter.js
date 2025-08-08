// group words by its firt letter
function groupWordsByFirstLetter(words) {
    const groupedWords = {};

    for (const word of words) {
        const firstLetter = word.charAt(0);
        if (groupedWords[firstLetter]) {
            groupedWords[firstLetter].push(word);
        } else {
            groupedWords[firstLetter] = [word];
        }
    }

    return groupedWords;
}

const words = ["apple", "banana", "ask", "ball", "bolt"];
const groupedResult = groupWordsByFirstLetter(words);

console.log(groupedResult);