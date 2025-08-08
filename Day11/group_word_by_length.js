// group word by length
// input : ["apple","ball","cat","dog"]
// output : {
//          5:["apple"],
//          4:["ball"],
//          3:["cat","dog"]
//       }


function groupWordByLength(words) {
    let groupedWords = {};
    for (let word of words) {
        let len = word.length;
        if (groupedWords[len]) {
            groupedWords[len].push(word)
        } else {
            groupedWords[len] = [word]
        }
    }
    return groupedWords;
}

console.log(groupWordByLength(["apple", "ball", "cat", "dog"]))



