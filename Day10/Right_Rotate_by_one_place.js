// right rotate by one place 
// input : arr =[1,2,3,4]
// output : arr = [4,1,2,3]
function rightRotateByOne(arr) {
    if (arr.length === 0) return arr;
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}


let arr = [1, 2, 3, 4];
rightRotateByOne(arr);
console.log(arr); 