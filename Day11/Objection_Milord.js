// Object 

// -------------------------------------------------
// let objj = {
//     'name': 'Vighesh',
//     'age': 24,
//     'college': "RBMI"
// }

let objj = {
    'name': 'Vighesh',
    'age': 24,
    'college': "RBMI"
}

// console.log(objj['age']);

//objj["key"] = "value"
//console.log(objj);
//console.log();
//objj["key" ] = "UP"
//console.log(objj);
//delete objj["location"];
//console.log(objj);
//console.log(details,name);
console.log("name" in objj);


for(let key in  objj){
    console.log(objj[key]);
}

//printing the keys in the list 
console.log(Object.keys(objj))
console.log(Object.values(objj))