
const isArmStrong = (n)=>{
    let temp = n;
    let sum = 0 ;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** String(n).length;
        temp = Math.floor(temp / 10);
    }
    return sum === n;
}
isArmStrong(153)