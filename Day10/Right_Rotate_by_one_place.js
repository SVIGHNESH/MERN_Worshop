// right rotate by one place 
// input : arr =[1,2,3,4]
// output : arr = [4,1,2,3]
function rightRotateByOne(arr) {
    let last = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}


let arr = [1, 2, 3, 4];
rightRotateByOne(arr);
console.log(arr); 