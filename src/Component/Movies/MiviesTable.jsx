import React, { Component } from 'react'
import Like from '../Common/like'
import { groupBy } from 'lodash'
import TableHeader from '../Common/TableHeader'
import TableBody from '../Common/TableBody'
import Table from '../Common/Table'
import { Link } from 'react-router-dom'
class MoviesTable extends Component {
   
    Columns=[{lable:"Title",path:"title", content:movie=><Link to={`/movie/${movie._id}`} > {movie.title} </Link>},
    {lable:"Genre",path:"genre.name"},{lable:"Stock",path:"numberInStock"},{lable:"Daily RentalRate",path:"dailyRentalRate"},
    {key:"Delete",content: movie=><button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger">Delete</button>}
    ,{key:"Like",content:movie=> <Like movie={movie} onLike={this.props.onLike}/>}
]



  
  
    render() { 
        const {movies,onDelete,onLike,onSort,sortColumn}=this.props
        return (
           

                <Table  onSort={onSort} sortColumn={sortColumn}
                 columns={this.Columns} items={movies}
                  onDelete={this.onDelete} onLike={this.onLike}/>
               
               
                
         );    }
}
 



 
export default MoviesTable;