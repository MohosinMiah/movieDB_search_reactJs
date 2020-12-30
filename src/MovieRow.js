import React, { Component } from 'react'

export default class MovieRow extends Component {
    render() {
        return (
            <table key={this.props.movie.id}>
                          <tbody>
                            <tr>
                              <td>
                              <img src={this.props.movie.poster_src} alt="Movie Poster" width="300" height="450" />
                              </td>
                              <td>{this.props.movie.description}</td>
                            </tr>
                          </tbody>
                    </table>
        )
    }
}
