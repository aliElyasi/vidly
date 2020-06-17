import React, { Component } from 'react'
import Like from '../Comon/like'

const MoviesTable = props => {
    const {movies,onDelete,onLike}=props
    console.log(movies)
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>title</th>
                    <th>genre</th>
                    <th>number in stock</th>
                    <th>dailyRentalRate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               
                { movies.map(m=>(
                 <tr key={m._id}>
                 
                 <td>{m.title}</td>

                 <td>{m.genre.name}</td>

                 
                 <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                     <td><button onClick={()=>onDelete(m)} className="btn btn-danger">Delete</button></td>
                     <td> <Like movie={m} onLike={onLike}/></td>

                 </tr>   
                ))
                }

            </tbody>
        </table>
     );
}
 
export default MoviesTable;