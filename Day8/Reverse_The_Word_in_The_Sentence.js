//Reverse the word in a sentence 
// input -> Hello World
//output -> World Hello 

let str = "Hello World"
str = str.split(" ").reverse().join(" ")
console.log(str)