

//(rearrangeAlternate([1, 3, -4, 5, -6, -2]));
function rearrangeAlternate(arr) {
   
    let positive = [];
    let negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positive.push(arr[i]);
        } else {
            negative.push(arr[i]);
        }
    }
    let result = [];
    let i = 0;
    let j = 0;

    while (i < positive.length || j < negative.length) {
        if (i < positive.length) {
            result.push(positive[i]);
            i++;
        }
        if (j < negative.length) {
            result.push(negative[j]);
            j++;
        }
    }

    return result;
}
console.log(rearrangeAlternate([2,1,3,-3,1,-2,1,-4,2,-4]));
