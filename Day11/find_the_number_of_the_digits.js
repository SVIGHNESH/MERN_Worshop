// find the number of the times a digit appears in the array 
// input : [1,3,4,3,5,1,3,5,2,23,4,1,2]

// for(let i = 0 ; i < numbers.length ; i++){
//     if(data[numbers[i]]){
//         data[numbers[i]] = data[numbers[i]] + 1
//     }
//     else{
//         data[numbers[i]] = 1
//     }
// }

// console.log(data)














let numbers = [1,3,4,3,5,1,3,5,2,23,4,1,2]
let data = {}

for(let i = 0 ; i< numbers.length;i++){
    if(data[numbers[i]]){
        data[numbers[i]] = data[numbers[i]] + 1 

    }
    else{
        data[numbers[i]] = 1 ;
    }
}
console.log(data);
//for the first non repeating charachters 

for(let keys in data){
    if(data[keys] == 1 ){
        console.log(keys);
    }
}

//invert the objetct (reverse the keys and the value )
let inverted_data = {}
for(let keys in data){
    let value = data[keys];
    if(inverted_data[value]){
        if(Array.isArray(inverted_data[value])){
            inverted_data[value].push(keys)
        }
        else{
            inverted_data[value] = [inverted_data[value], keys]
                
    }
    else{
        inverted_data[value] = keys
    }
}

console.log(inverted_data)



