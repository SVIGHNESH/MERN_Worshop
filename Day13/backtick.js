// console.log(`
//     this
//     is 
//     the 
//     backtick
//     of th
//     the 
//     JS 
    
    
//     `)


//     let a = 3
//     let b = 6;
//     console.log(`a value is the ${a}`);
//     console.log(`b value is the ${b}`);
const fun = (string,{...value})=>{
    console.log(string);
    console.log(value);

}

let hi = "gi hello"
let num  = 123
`${fun(hi,{num})}`