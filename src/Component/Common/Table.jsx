import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
const Table = props => {


   const {onSort,sortColumn,columns,items,onDelete,onLike} = props;
    return ( 
<table className="table">
    <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
           
    <TableBody items={items} columns={columns} onDelete={onDelete} onLike={onLike} />

</table>

     );
}
 
export default Table;