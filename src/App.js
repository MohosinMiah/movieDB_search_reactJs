import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MovieRow from './MovieRow';


class App extends Component{
  

    constructor(props) {
      super(props);

   const movies = [
    {id:1,  poster_src: 'logo.png', title:'Title 1',description:'React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.'},
    {id:2,  poster_src: 'logo.png', title:'Title 2',description:'React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.'},
    {id:3,  poster_src: 'logo.png', title:'Title 3',description:'React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.React doesn’t force you to use the ES6 class syntax. If you prefer to avoid it, you may use the create-react-class module or a similar custom abstraction instead. Take a look at Using React without ES6 to learn more.Take a look at Using React without ES6 to learn more.'},
  ]
  
     var movie_list = []

     movies.forEach(movie => {

     const movie_row = <table key={movie.id}>
                          <tbody>
                            <tr>
                              <td>
                              <img src={movie.poster_src} alt="Movie Poster" width="300" height="450" />
                              </td>
                              <td>{movie.description}</td>
                            </tr>
                          </tbody>
                    </table>

      movie_list.push(movie_row);
    });

     this.state = {
      rows :  movie_list
     }

    

    }
 render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tr>
            <td>
              <img src="logo.png" alt="App Logo" width="150" height="100" />
            </td>
            <td width="20px">

            </td>

            <td>
              <h1
              >MoviesDB Search</h1>

            </td>
          </tr>
        </table>



        <div className="search">
          <input className="search_input" id="input" type="text" placeholder="Search Your Favorites Movie" />

        </div>




        <div className="movie_list">

          <p>Hello Bangladesh. I am Mohosin Miah</p>
          <MovieRow></MovieRow>
       { this.state.rows }
 
        </div>



      </div>
    );
  }

}

export default App;
