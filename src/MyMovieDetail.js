import React from 'react';
import axios from 'axios';

import OmdbTitle from './OmdbTitle';
import view from './view';

import './MyMovieDetail.css';
import './button.css';
import './table.css';

function MyMovieDetail(props) {
  const app = props.app;
  const state = app.state;
  const myMovie = state.myMovieDetail;
  const form = state.myMovieDetailForm;
  const imdbID = myMovie.OmdbTitle.imdbID;

  const removeMovie = async(e) => {
    e.preventDefault();
    console.log('MyMovieDetail.removeMovie:', imdbID);
    const url = `/api/myMovieList/${imdbID}`;
    await axios.delete(url);
    app.setState({
      myMovies: null,
      currentView: view.myMovies,
    });
  }

  const handleChange = async(e) => {
    e.preventDefault();
    alert('TODO: implement this feature.');
  };

  const handleClick = async(e) => {
    e.preventDefault();
    alert('TODO: implement this feature.');
  };

  return (
    <div className="MyMovieDetail">
      <OmdbTitle omdbTitle={myMovie.OmdbTitle} />
      <hr />
      <table className="paleBlueRows">
      <tbody>
      <tr>
        <th>Watched</th>
        <td>
          <input type="checkbox" checked={form.watched} onChange={handleChange} />
        </td>
      </tr>
      <tr>
        <th>My Rating</th>
        <td>
          <input type="text" value={form.rating} onChange={handleChange} />
          <a href="" className="button" onClick={handleClick}>
            submit
          </a>
        </td>
      </tr>
      <tr>
        <th>Comments</th>
        <td>
          <ul>
          {myMovie.Comments.map(c =>
            <li key={c.TimeStamp}>[c.TimeStamp]: c.Text</li>
          )}
          </ul>
          <input type="text" value={form.comment} onChange={handleChange}/>&nbsp;
          <a href="" className="button" onClick={handleClick}>
            submit
          </a>
        </td>
      </tr>
      </tbody>
      </table>

      <a href="" className="buttonRed" onClick={removeMovie}>
        Remove from My Movies!
      </a>
    </div>
  );
}

export default MyMovieDetail;
