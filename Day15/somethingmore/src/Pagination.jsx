// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// function Pagination({users},send){
//     const [rows,setRows] = useState(5);
//     const users_length =users.length
//     const [c_page,setC_page] = useState(1)
//     const l_row = c_page*rows;
//     const first_row =  l_row - rows 


//     send([rows,users_length,c_page,l_row,first_row]    )
//     return(
//         <div>
//                 <button>Prev</button>



//         </div>
//     );

// }
// export default Pagination

  function Pagination({users,send_data}){
    const len = users.length;
    const [rows_per_page,setRows_per_page] = useState(5);
    const[page,Setpage] = useState(1);
      const l_row = page * rows_per_page
      const f_row  = l_row - rows_per_page;
    const users_data = users.slice(f_row,l_row);
    const [num_of_pages,setNum_of_pages] = useState(Math.ceil(len/rows_per_page));
    useEffect(()=>{
    send_data({"rows_per_page":rows_per_page,"page":page,"l_row":l_row,"f_row":f_row,"users_data":users_data,"numb_of_page":num_of_pages})
  
    },[users,page])
 
    const decrease =()=>{
                // if(page > 1 ){
                //     Setpage(page - 1 )
                // }

                page === 1 ? Setpage(1) : Setpage(prev => prev - 1)
    }
    const increase = ()=>{
          page === num_of_pages ? Setpage(num_of_pages) : Setpage(prev => prev + 1)
    }


      const move_to_page = (pageNumber) => {
        Setpage(pageNumber);

      };
    useEffect(()=>{
        setNum_of_pages(Math.ceil(len/rows_per_page));
    },[len,rows_per_page])

    return(
      <div>
        <button onClick={decrease}>
                Prev
        </button>
        {Array.from({length: num_of_pages}, (_, i) => (
          <button key={i} onClick={() => move_to_page(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button onClick={increase}>
            Next
        </button>


      </div>
    );
  }

 export default Pagination;