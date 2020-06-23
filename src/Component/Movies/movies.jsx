import React, { Component } from 'react'
import MoviesTable from './MiviesTable';
import { getMovies } from '../../services/fakeMovieService';
import Pagination from '../Common/pagination';
import Paginate from '../../Utility/Paging';
import GroupList from '../Common/GroupList';
import { getGenres, genres } from '../../services/fakeGenreService';
import _ from 'lodash'
import SearchBox from '../Common/serchbox';
import { Link } from 'react-router-dom';
class Movies extends Component {

    state = { 
        movies:[],
        genres:[],
        curentPage:1,
        pageSize:3,
        curentGroupId:-1,
        moviesCount:1,
        sortCloumn:{path:"title",order:"asc"},
        search:""

     }
     componentDidMount(){
        console.log("componentDidMount")

       let movies=getMovies();
       let genres=[{_id:-1,name:"All"},...getGenres()];
     let  moviesCount=movies.length
        this.setState({movies:movies,genres,moviesCount})

    }
    render() { 
       let movies =this.getData();
    let  {search}=this.state;
     
        return (
            <React.Fragment>

    
<div className="row" style={{marginTop:10}} >

<div className="col-3">
    
<GroupList curentGroupId={this.state.curentGroupId} items={this.state.genres} onGroupChang={this.handelGroupChang} />
</div>
<div className="col">
<div className="row" style={{    direction: 'rtl',   marginBottom: 5,  marginRight: 15}}>
<Link to={"movie/create"} className="btn btn-success ">create </Link>

</div>
<SearchBox value={search} onChange={this.handelSearchChange} />

<MoviesTable onSort={this.handelSort} sortColumn={this.state.sortCloumn}  movies={movies} onDelete={this.HandelDelete} onLike={this.HandelLike} />
</div>
</div>
     
      
        <div >      
             <Pagination onPageChange={this.handelPageChang} curentPage={this.state.curentPage} pageSize={this.state.pageSize} count={this.state.moviesCount}/>
             </div>
 
        </React.Fragment>

        
        );
    }
    handelSearchChange=({currentTarget:input})=>{
       let {search}=this.state;
       search=input.value;
       let moviesCount=this.getMoviesCount(search,this.state.curentGroupId);
       this.setState({search,moviesCount});

    }
    HandelDelete=DeleteItem=>{
      let  movies=[...this.state.movies.filter(m=>m._id!=DeleteItem._id)];
        this.setState({movies})
    }
    HandelLike=LikeItem=>{
        let movies=[...this.state.movies]
       let index= movies.indexOf(LikeItem);
       movies[index].liked=!movies[index].liked
       this.setState({movies})

    }
    handelPageChang =page=>{
    this.setState({curentPage:page})
    }
    handelGroupChang=group=>{
       let curentGroupId=group._id;
       let moviesCount=this.getMoviesCount(this.state.search,curentGroupId)
       
        this.setState({curentGroupId,curentPage:1,moviesCount });

    }


getMoviesCount(search,curentGroupId){
    debugger;

   
    let  movies=!search? getMovies(): getMovies().filter(m=>m.title.indexOf(search)!==-1);
    let  moviesCount=curentGroupId==-1?movies.length: movies.filter(m=>m.genre._id==curentGroupId).length

  return moviesCount;

}
     
    handelSort=sortCloumn=>{

        this.setState({sortCloumn})
    }
    getData=()=>{
       let {pageSize,curentPage,movies,curentGroupId,sortCloumn,search} =this.state; 
       if(search)
       {
          movies=movies.filter(m=>m.title.indexOf(search)!==-1)
       }
     if(curentGroupId!=-1){
         movies=movies.filter(m=>m.genre._id==curentGroupId);
     }
    
   
 let sorted=_.orderBy(movies,[sortCloumn.path],[sortCloumn.order]);
     

       let result= Paginate(curentPage,pageSize,sorted);
     
       

       return result;
    }
}
 
export default Movies;