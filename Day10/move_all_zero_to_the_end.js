// move all the zeroes to the end 
// input : [1,32,0,0,42,44,2,5,2,0]
function moveZeroesToEnd(arr) {
    let result = [];
    let zeroCount = 0;
    for (let num of arr) {
        if (num == 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }
    while (zeroCount) {
        result.push(0);
        zeroCount--;
    }
    return result;
}

const input = [1,32,0,0,42,44,2,5,2,0];
console.log(moveZeroesToEnd(input)); 