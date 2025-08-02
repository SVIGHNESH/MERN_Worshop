let Vowels = "aeiouAEIOU"
let Vowcount = 0;
let ConstCounts = 0;
let Str = "Vighnesh"
for(let i = 0 ;  i< Str.length;i++){
    if( Vowels.includes(Str[i])){
        Vowcount += 1;
    }
    else{
        ConstCounts+=1;
    }
}

console.log(Vowcount);
console.log(ConstCounts);