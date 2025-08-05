//Reverse Vowels  Only 
// input : "hello"
let s = "hello"
const vowels = 'aeiouAEIOU';
const arr = s.split('');
let left = 0, right = arr.length - 1;
while (left < right) {
    while (left < right && vowels.indexOf(arr[left]) === -1) {
        left++;
    }
    while (left < right && vowels.indexOf(arr[right]) === -1) {
        right--;
    }
    if (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
console.log(arr.join(''));

