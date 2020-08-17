import React from 'react';
import './table.css';

function OmdbTitle(props) {
  const omdbTitle = props.omdbTitle;
  let poster = omdbTitle.Poster;
  if (poster === 'N/A') {
    if (omdbTitle.Type === 'series') {
      poster = '/icon_series.jpg';
    }
    else if (omdbTitle.Type === 'episode') {
      poster = '/icon_episode.jpg';
    }
    else {
      poster = '/icon_movie.jpg';
    }
  }
  return (
    <div className="OmdbTitle">
      <div><img src={poster} alt={omdbTitle.Title} /></div>
      <table className="paleBlueRows">
      <tbody>
      <tr>
        <th>Title</th>
        <td>{omdbTitle.Title}</td>
      </tr>
      <tr>
        <th>Year</th>
        <td>{omdbTitle.Year}</td>
      </tr>
      <tr>
        <th>Rated</th>
        <td>{omdbTitle.Rated}</td>
      </tr>
      <tr>
        <th>Released</th>
        <td>{omdbTitle.Released}</td>
      </tr>
      <tr>
        <th>Runtime</th>
        <td>{omdbTitle.Runtime}</td>
      </tr>
      <tr>
        <th>Genre</th>
        <td>{omdbTitle.Genre}</td>
      </tr>
      <tr>
        <th>Director</th>
        <td>{omdbTitle.Director}</td>
      </tr>
      <tr>
        <th>Writer</th>
        <td>{omdbTitle.Writer}</td>
      </tr>
      <tr>
        <th>Actors</th>
        <td>{omdbTitle.Actors}</td>
      </tr>
      <tr>
        <th>Plot</th>
        <td>{omdbTitle.Plot}</td>
      </tr>
      <tr>
        <th>Language</th>
        <td>{omdbTitle.Language}</td>
      </tr>
      <tr>
        <th>Country</th>
        <td>{omdbTitle.Country}</td>
      </tr>
      <tr>
        <th>Awards</th>
        <td>{omdbTitle.Awards}</td>
      </tr>
      <tr>
        <th>Ratings</th>
        <td>
          <ul>
          {omdbTitle.Ratings.map(r =>
            <li key={r.Source}>{r.Value} ({r.Source})</li>
          )}
          </ul>
        </td>
      </tr>
      <tr>
        <th>Metascore</th>
        <td>{omdbTitle.Metascore}</td>
      </tr>
      <tr>
        <th>imdbRating</th>
        <td>{omdbTitle.imdbRating}</td>
      </tr>
      <tr>
        <th>imdbVotes</th>
        <td>{omdbTitle.imdbVotes}</td>
      </tr>
      <tr>
        <th>imdbID</th>
        <td>{omdbTitle.imdbID}</td>
      </tr>
      <tr>
        <th>Type</th>
        <td>{omdbTitle.Type}</td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default OmdbTitle;
