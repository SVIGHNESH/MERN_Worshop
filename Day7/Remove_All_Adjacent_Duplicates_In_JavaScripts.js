//Remove all adjacent duplicates
// input : aaabbbcsde"
//output : "csde"


let str = "aabbaccad";
let w = "";


for(let i of str){
    if(i == w[w.length-1]){
        w = w.slice(0,w.length-1);
    }
    else{
        w += i;
    }
}

console.log(w)


let word = "aaaaaaaaab"

let c = ""
for(let i of word){
    if(i== c[c.length - 1 ]){
        c = c.slice(0,c.length-1)
    }
    else{
        c += i 
    }
}

console.log(c)