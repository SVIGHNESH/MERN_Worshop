// const a = 1 ; 


// var b = "where"
// console.log(b);
// console.log(age);
// //hoisting 

// var age = 44

// console.log(age)
// var age = 40;
// function plus(a,b){
//     return a+b;
// }
// var sum = plus(3,5);


//operator
//Arithmetic Operator 
// +,-,*,/,**,%

//Comparision 
// ==,===,<,>,!=


//Assignment Operator
//=,+=,-=,*=,/=,%=

// let age = 40;
// let roll_number = "40";
// console.log(age === roll_number)


//Conditionals 
// let age = 60;
// if(age < 18 ){
//     console.log("You Are eligible")
// }
// else if (age < 38){
//     console.log("You are super eligible")
// }
// else{
//     console.log("You are super super Eligible ")
// }


// let age = [243,24,2,3,242]
// console.log(typeof age)

//type conversion 
//implicit

// let age = 29;
// let num = "10";
// console.log(num+age);


//expplicit

// let age = 30;
// console.log(  typeof parseInt(age))


let name = " Vighnesh ";
// console.log(name.length)
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.trim())
// console.log(name.charAt(4))
// console.log(name.indexOf("i"))
// console.log(name.lastIndexOf("h"))
// console.log(name.slice(2,5));
// console.log(name.substr(1,5))
//console.log(name.replace("V","R"))
//console.log(name.replaceAll("h","R"))
// console.log(name.includes("y"))

// for(let i = name.length;i >= 0;i--){
//     console.log(name.charAt(i));
// }

// console.log(name.split("").reverse().join("").trim());

// let reverseStr = '';
// for(let i = name.length ;i>=0;i--){
//         reverseStr += name.charAt(i);
// }

// console.log(reverseStr)

let PalindromeEx = 'madam';
let reverseEx = "";

for(let i = PalindromeEx.length ;i>=0;i--){
        reverseEx += PalindromeEx.charAt(i);
}

if(PalindromeEx == reverseEx){
    console.log("True ; it is the palindrome");
}
else{
    console.log("False ; it is not the palindrome");

}