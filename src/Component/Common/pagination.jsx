import React, { Component } from 'react'
import _, { ceil } from "lodash"
const Pagination = props => {
    const {curentPage,pageSize,count,onPageChange} =props;
  let countPage= Math.ceil(count/pageSize);
  console.log(`countPage ${countPage}`)
  let pages= _.range(1,countPage+1)

    return (
        
        <nav style={{textAlign:"center"}}>
        <ul className="pagination" style={{display: 'inline-flex'}}>
      {  pages.map(page=>(
        <li
            key={page}
            className={page === curentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
       
      ))} 
    </ul>
          </nav>
     );


    

}
 
export default Pagination;