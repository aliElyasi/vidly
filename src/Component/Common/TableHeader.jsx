import React, { Component } from 'react';
class TableHeader extends Component {

    raiseSort=path=>{
        
        
        let {sortColumn,onSort} =this.props;
        debugger;
       if(sortColumn.path===path){
        sortColumn.order=sortColumn.order=="asc"?"desc":"asc";
       }
       else{
        sortColumn.path=path;
        sortColumn.order="asc"
       }
       onSort(sortColumn);
     
     }

     renderSortIcon=column=>{
       
         let {sortColumn} =this.props;
         if(column.path!==sortColumn.path)return null;
          if(sortColumn.order==="asc") return <i className="fa fa-sort-asc" />;
          return <i className="fa fa-sort-desc" />;

            
         

     }

    render() { 
        
        let columns=this.props.columns;
        console.log("pp",this.props)
      

        

        return ( 
      
            <thead>

                <tr>
                    

                    {columns.map(column=>(
                         <th key={column.path  ||column.key} onClick={()=>this.raiseSort(column.path)} >{column.lable}
                         {this.renderSortIcon(column)}
                         </th>

                    ))}
                   
                   
                </tr>
            </thead>
    

         );
    }
}
 
export default TableHeader;