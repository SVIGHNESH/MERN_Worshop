// find the max sum from the two numbers of the array 
// [2,-4,-4,,6,-5,0,-3,5,9]
// if the sum is the negative make it the zero 

let numbers = [2,-4,-4,,6,-5,0,-3,5,9]


function findMaxSum(numbers){
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] !== undefined && numbers[j] !== undefined) {
            let sum = numbers[i] + numbers[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
}
    if (maxSum < 0) {
    maxSum = 0;
}
    return maxSum
}



console.log(findMaxSum(numbers));