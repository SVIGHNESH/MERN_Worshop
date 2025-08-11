//console.log(evenSumPairs([1, 2, 3, 4]));
function evenSumPairs(arr) {
    const even = [];
    const odd = [];
    const result = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }

    for (let i = 0; i < odd.length; i++) {
        result.push([odd[i], even[i]]);
    }

    return result;
}
console.log(evenSumPairs([1, 2, 3, 4]));
// Output: [[1, 3], [2, 4]]