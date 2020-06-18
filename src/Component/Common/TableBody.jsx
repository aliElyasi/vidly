import React, { Component } from 'react';
import _ from 'lodash'
class TableBody extends Component {
 
    renderCell(item,column){
       if(column.content)
       {
        return column.content(item);
       }
        return _.get(item,column.path)

    }
    renderKey(item,column){
    
     return item._id+(column.path ||column.key);
    }
    render() { 
        const {items,columns} =this.props;
        console.log(this.props)
        return ( <tbody>
            {items.map(data=>
            <tr key={data._id} >
               {columns.map(column=>
                <td key={this.renderKey(data,column)} >
                    {this.renderCell(data,column)}
                </td>
                )}  
            </tr>
            
            
            )
            
            
            
            
            }
        </tbody> );
    }
}
 
export default TableBody;