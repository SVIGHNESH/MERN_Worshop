let str = "This is the Example of the String to COunt the Words "
    let count = 0;
    let word = "";
    let inWord = false;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] !== ' ' && str[i] !== '\n') {
    //         if (!inWord) {
    //             count++;
    //             inWord = true;
    //         }
    //     } else {
    //         inWord = false;
    //     }
    // }



    for (let i of str){
        if(i!=" "){
            word+=i;
        }
        else if(str){
            count++;
            word="";
        }
    }
    if(word){

        count +=1;
    }
    console.log(count);
