import React, { Component } from 'react'
const Like = props=> {
   const {movie,onLike} =props
  
    return ( 

<i onClick={()=> onLike(movie)} className={movie.liked?"fa fa-heart":"fa fa-heart-o"} aria-hidden="true"></i>


     );
}
 
export default Like;