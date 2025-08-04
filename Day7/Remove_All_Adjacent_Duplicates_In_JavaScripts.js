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