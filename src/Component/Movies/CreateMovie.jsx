import React, { Component } from 'react';
import Form from '../Common/Form'
import {getGenres, genres} from '../../services/fakeGenreService'
import joi, { join } from 'joi-browser'
import { getMovies, getMovie, saveMovie } from '../../services/fakeMovieService';
import { uniqueId } from 'lodash';
import generateGUID from '../../Utility/Guid'

class CreateMovie extends Form  {
 
    state ={
        genres:getGenres(),
        data:{id:generateGUID(),title:"",numberInStock:0,dailyRentalRate:0,genreId:""},
        errors:{}
        
    }
    componentDidMount(){
       let genres=getGenres();
       this.setState({genres});
      let id=this.props.match.params.id;
      console.log("id",id);
       if(!id) return;
       let movie=getMovie(id);
       if(!movie) return this.props.history.replace("/not-found")
       let data= this.mapToviewModel(movie)
       this.setState({data})

      
    }
    mapToviewModel=(movie)=>{
        
       let data=
       {
             id: movie._id,
            title:movie.title,
            numberInStock:movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate,
            genreId:movie.genre._id
        }
        return data;
    }
    schema={
        id:joi.string().required(),
        title:joi.string().required().label("Title"),
        numberInStock:joi.number().integer().label("Stock"),
        dailyRentalRate:joi.number().integer().label("Rate"),
        genreId:joi.string().required()
    }
    render() { 
       const {genres} =this.state;
        return ( 
            <form onSubmit={this.onSubmit}>

                {this.renderInput("Title","title")}
                {this.renderSelectList("Genre","genreId",genres)}
                {this.renderInput("Number In Stock","numberInStock","number")}
                {this.renderInput("Rate","dailyRentalRate","number")}
                {this.renderButton("save")}
            </form>



         );
    }
    doSubmit=()=>{
        debugger;
      let {data} =this.state;
         
        let movie= saveMovie(data);
      
            
    }
}
 
export default CreateMovie;