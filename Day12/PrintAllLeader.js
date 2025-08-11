// 1.Print All Leaders in an Array
// What is a Leader?
// In an array, an element is a "leader" if it is greater than or equal to all the elements to its right.


function leadersOptimized(arr) {
    const leaders = [];
    let rightMax = arr[arr.length - 1];
    leaders.push(rightMax);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= rightMax) {
            rightMax = arr[i];
            leaders.push(rightMax);
        }
    }

    return leaders.reverse();
}
console.log(leadersOptimized([1,2,3,42,4,2,5,2,5,2,6,87,3,2,6,2,12,6,3,9,4,2,]));