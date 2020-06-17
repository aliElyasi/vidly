import React, { Component } from 'react';
const GroupList = props => {
    const {items,curentGroupId,onGroupChang} =props
    
    return ( 

        <React.Fragment>
        <ul class="list-group">

{        items.map(g=>(
  <li onClick={()=>onGroupChang(g)} className={g._id==curentGroupId?"list-group-item active":"list-group-item"}>{g.name}</li>


        ))
}
</ul>

        </React.Fragment>
        
     );
}
 
export default GroupList;