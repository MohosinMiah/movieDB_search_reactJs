import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Heading Bar Style Start  */}
      <table className="titleBar">
        <tr>
          <td>
            <img src="logo.png" alt="App Logo" width="150" height="100" />
          </td >
          <td width="20px">

          </td>

          <td>
            <h1 
               >MoviesDB Search</h1>

          </td>
        </tr>
      </table>
      {/* Heading Bar Style ENd  */}

      <div className="search"> 
      <input className="search_input" id="input" type="text" placeholder="Search Your Favorites Movie" />

      </div>

    </div>
  );
}

export default App;
