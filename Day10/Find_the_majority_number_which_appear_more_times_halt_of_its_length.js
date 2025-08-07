// find the majority number which appear more than half of its length 
// input = [1,24,2,4,3,2,2,2,2]
// output = 2

function findMajorityElement(arr) {
    const n = arr.length;
    let c = null;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (count === 0) {
            c = arr[i];
            count = 1;
        } else if (arr[i] === c) {
            count++;
        } else {
            count--;
        }
    }

    // Verify if the c is actually a majority element
    count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === c) {
            count++;
        }
    }

    if (count > n / 2) {
        return c;
    }

    return null; // No majority element found
}

const arr = [1, 24, 2, 4, 3, 2, 2, 2, 3,3,2,3,3,3,3,3,3,3];
const majorityElement = findMajorityElement(arr);

if (majorityElement !== null) {
    console.log("Majority element:", majorityElement);
} else {
    console.log("No majority element found");
}