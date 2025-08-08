// groups words 
// ["tea","eat","bat","tab"]
// output : {
//        "aet" : ["tea","eat"]
//        "abt" : ["bat","tab"]
//}
function groupAnagrams(words) {
    const anagramGroups = {};

    for (const word of words) {
        const sortedWord = word.split("").sort().join("");

        if (anagramGroups[sortedWord]) {
            anagramGroups[sortedWord].push(word);
        } else {
            anagramGroups[sortedWord] = [word];
        }
    }

    return anagramGroups;
}

// Example usage:
const words = ["tea", "eat", "bat", "tab", "ate", "listen", "silent"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);