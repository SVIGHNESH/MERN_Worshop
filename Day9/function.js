// function hello(){
//     return "Hello"
// }
// console.log(hello());

// const hi = ()=>{
//     return "Hello"
// }
// console.log(hi())


// const addition = (a,b=5) => {
//     return a+b
// }
// console.log(addition(3,6))



//global variable
const hii = "hlo"
const print = ()=>{
    const local = "im local variable"
    console.log(hii);
    console.log(local)
}
print()
// console.log(local)