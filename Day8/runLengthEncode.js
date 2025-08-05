//input : "aaabbcddd"
// output : "a3b2c1d3"

let str = "aaabbcdd"

    let result = "";
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }
    console.log(result)



