//flatten object

// let obj = {name:"Paveen",

            //     marks:{
            //         "maths":39,
            //         "science":40
            //     },
            //     "roll_no":22
            // }

// output ==> {
//     name:"praveen",
//     "marks.maths":39,
//     "marks.science" : 40,
//     "roll_no" : 22
// }

function flattenObject(obj, parentKey = '') {
    let flattened = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                Object.assign(flattened, flattenObject(obj[key], newKey));
            } else {
                flattened[newKey] = obj[key];
            }
        }
    }

    return flattened;
}

// Example usage:
let obj = {
    name: "Paveen",
    marks: {
        maths: 39,
        science: 40
    },
    roll_no: 22
};

let flattenedObj = flattenObject(obj);
console.log(flattenedObj);


console.log("this is the one ");