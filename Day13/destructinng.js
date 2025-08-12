// const arr = [3,2,4]

// const [d, ,f] = arr 
// console.log(d)
// console.log(f)


// const obj = {
//     "students":"RBMI",
//     "Marks":{
//         "Maths":45,
//         "English":65,
//     },
//     "Location":"UP"

// }
// const{Marks:{Maths,React}} = obj
// console.log(Maths)
// console.log(React)


// const obj = {
//     "students":"RBMI",
//     "Marks":[3,42,4,2,4,2]
//     "Location":"UP"

// }
// const{Maths:[akgfm,afkjahf]}

const fun = (...ages)=>{
    console.log(ages)
}
fun({"age":45,"name":"VIghneh"})



//Spread ... Operator 

const arr = [3,24,22,3]
const newArr = [...arr]
console.log(newArr);


const copy = arr
copy[0] = 9
console.log(arr)
console.log(copy)

