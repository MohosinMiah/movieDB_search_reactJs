import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MovieRow from './MovieRow';
import HeaderBar from './HeaderBar';
import $, { event } from 'jquery'


class App extends Component{
  

    constructor(props) {
      super(props);

      this.performSearch('a')


      this.state = { }



      
  //  const movies = [
  //   {id:1,  poster_src: 'logo.png', title:'Title 1',description:'React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.'},
  //   {id:2,  poster_src: 'logo.png', title:'Title 2',description:'React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.'},
  //   {id:3,  poster_src: 'logo.png', title:'Title 3',description:'React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.Take a look at Using React without ES6 to learn more.'},
  // ]
  
    //  var movie_list = []

    //  results.forEach(movie => {

    //  const movie_row = <MovieRow movie={movie}></MovieRow>

    //   movie_list.push(movie_row);
    // });

    //  this.state = {
    //   rows :  movie_list
    //  }


    }


    performSearch(searchTerm){

      const stringUrl = 'https://api.themoviedb.org/3/search/movie?api_key=bbb5a6cb242ee96a5e2c751603173b64&language=en-US&page=1&include_adult=true&query='+searchTerm
      $.ajax({
        url : stringUrl,
        success: (searchResults) => {
            console.log(searchResults)

            const results = searchResults.results
            console.log(results)
           var movie_list = []

          results.forEach(movie => {

          const movie_row = <MovieRow movie={movie}></MovieRow>

            movie_list.push(movie_row);

                  });

          this.setState( {
            rows :  movie_list
          })

            
        },
        error: (xhr,status,err)=> {
            console.error("Fail To Fetch Error")

        }

      })
      console.log("Perform Search");
    }

    searchChangeHandler(event){
      this.performSearch(event.target.value)
     // console.log(event.target.value)

   }

 render() {
    return (
      <div className="App">

        <HeaderBar></HeaderBar>

        <div className="search">
          <input className="search_input" id="input" name="searchValue" type="text" onChange={this.searchChangeHandler.bind(this)} placeholder="Search Your Favorites Movie" />
        </div>



        <div className="movie_list">
          
          { this.state.rows }
 
        </div>

      </div>
    );
  }

}

export default App;
