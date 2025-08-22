// const fun = (num) => {

//     let three = 3;

//     return setTimeout(() => {
//         console.log("hello"),
//         , 1000);

// }

// let one = fun(12);
// one();


for(var i = 1 ; i<=5;i++){
            // console.log("before setTimeout",i)
            const h =(num)=>{
                setTimeout(()=>{
                    console.log(num);
            },1000)
        }

            
            h(i);
        
}


