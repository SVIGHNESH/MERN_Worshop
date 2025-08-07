// Arrays 
// let number = [10,5,3,40,6]
// number.forEach((element,index) => {
//     console.log()
// });

// let changed = number.map((num)=> num)
// console.log(changed)


// // reduce 
// let sum_reduced = number.reduce((c,e)=>c+e)
// console.log(sum_reduced);


// some

// console.log(number.some((n)=>n%2!=0))


//every

// console.log(number.every((n)=> n>0));

// filter 
// console.log(number.filter((n)=> n%2==0))

// find
// console.log(number.find((n)=>n > 10));

//findIndex

// console.log(number.findIndex((n)=> n > 10));

let numbers = [1,3,5,7,9]
// numbers.push(66)
// console.log(numbers);
// numbers.pop(66)
// console.log(numbers);


// // unshift
// numbers.unshift(34)
// console.log(numbers);


//splice 3 para; (startIndex , DeleteCount,"String")

// let content = [ "hello","hi","world"]
// let changed_Content = content.splice(1,1,"bye")
// console.log(changed_Content);
// console.log(content);
// content.splice(1,"Hit")
// console.log(content);


//concat

let arr1 =[2,3,4,23,2]
let arr2 = [4,3,5,2,5,3]
console.log(arr1.concat(arr2));