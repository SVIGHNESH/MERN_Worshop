// two sum 
// input = 1,2
let numbers = [1,2,3,6,7,8,9];
let target = 10;
let result = [];
// numbers.forEach((element, index) => {
//     let expectedNumber = target - element;
//     if (numbers.includes(expectedNumber) && !result.includes(expectedNumber)) {
//         result.push(element);
//         result.push(expectedNumber);
//     }
// });
// if (result.length > 0) { 
//     console.log(`Two numbers that add up to ${target} are: ${(result[0])} and ${(result[1])}`);
// }
// else {
//     console.log(`No two numbers add up to ${target}`);
// }   



const twoSum =(list,sum)=>{
    for(let i = 0 ; i< list.length;i++){
        for(let j = i+1; j < list.length;j++){
            if(list[i]  + list[j] == sum){
                return {i,j}
            }
        }
    }
    return []
}
console.log(twoSum(numbers,target));