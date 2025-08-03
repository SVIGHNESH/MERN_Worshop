// let Vowels = "aeiouAEIOU"
// let Vowcount = 0;
// let ConstCounts = 0;
// let Str = "Vighnesh"
// for(let i = 0 ;  i< Str.length;i++){
//     if( Vowels.includes(Str[i])){
//         Vowcount += 1;
//     }
//     else{
//         ConstCounts+=1;
//     }
// }

// console.log(Vowcount);
// console.log(ConstCounts);

let sentence =" Vighnesh is my name of the choice"

//Vighnesh Is My Name Of The Choice 

word = '';
for(let i = 0 ; i < sentence.length;i++){
    if(sentence[i] != " "){
        word += sentence[i];
        
    }
    else{
        word += sentence[i];
        result += word.charAt(0).toUpperCase() + word.slice(1) + " "
        word = " "

    }
}
if(word){
    result += word.charAt(0).toUpperCase().slice(1)
}
