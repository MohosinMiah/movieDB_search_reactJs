import React, { Component } from 'react'
import './MovieRow.css';


export default class MovieRow extends Component {

  movieView(){
    var url = "https://www.themoviedb.org/movie/"+this.props.movie.id
    window.location.href = url
  }

    render() {
      var imagePath = 'https://image.tmdb.org/t/p/w500/'+ this.props.movie.poster_path
      var class_movie 
      if(this.props.movie.id % 2 === 0){
            class_movie = "movie_list_2"
      }else{
          class_movie = "movie_list_1"

      }
     
        return (
            <table key={this.props.movie.id} className={class_movie}>
                          <tbody>
                            <tr>
                              <td>
                              <img src={imagePath} alt="Movie Poster" width="300" height="450" />
                              </td>
                              <td>
                              <h2 className="movie_title">{this.props.movie.original_title}</h2>
                              <p className="movie_overview">{this.props.movie.overview}</p>
                               <input type="button" className="view_movie" name="view_movie" id="view_movie" value="View" onClick={this.movieView.bind(this)} />
                                </td>
                            </tr>
                          </tbody>

                    </table>
                    
        )
    }
}
