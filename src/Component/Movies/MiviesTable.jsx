import React, { Component } from 'react'
import Like from '../Common/like'
import { groupBy } from 'lodash'
import TableHeader from '../Common/TableHeader'
import TableBody from '../Common/TableBody'
import Table from '../Common/Table'
class MoviesTable extends Component {
   
    Columns=[{lable:"Title",path:"title"},
    {lable:"Genre",path:"genre.name"},{lable:"Stock",path:"numberInStock"},{lable:"Daily RentalRate",path:"dailyRentalRate"},
    {key:"Delete",content: movie=><button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger">Delete</button>}
    ,{key:"Like",content:movie=> <Like movie={movie} onLike={this.props.onLike}/>}
]



  
  
    render() { 
        const {movies,onDelete,onLike,onSort,sortColumn}=this.props
        return (
           
            <table className="table">

                <Table  onSort={onSort} sortColumn={sortColumn}
                 columns={this.Columns} items={movies}
                  onDelete={this.onDelete} onLike={this.onLike}/>
               
               
                
            </table>
         );    }
}
 



 
export default MoviesTable;