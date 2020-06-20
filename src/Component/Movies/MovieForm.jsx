import React, { Component } from 'react'

const MovieForm = ({match,history}) => {
   
return (
<React.Fragment>
<h2>{match.params.id}</h2> 
<button className="btn btn-primary" onClick={()=>history.push("/movies")}> save</button>
</React.Fragment>

     );
}
 
export default MovieForm;