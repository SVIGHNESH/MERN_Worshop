// rotate the arr by the left by one 
// input :arr = [1,2,3,4]
// output : arr = [2,3,4,1]
let arr = [1,2,3,4];

function leftRotateByOne(arr) {
    if (arr.length === 0) return arr;
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}

leftRotateByOne(arr);
console.log(arr);