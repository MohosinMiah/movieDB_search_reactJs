import React, { Component } from 'react'

export class HeaderBar extends Component {
    render() {
        return (
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
        )
    }
}

export default HeaderBar
