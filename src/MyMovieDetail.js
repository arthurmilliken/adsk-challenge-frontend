import React from 'react';

function MyMovieDetail(props) {
  const app = props.app;
  const state = app.state;
  const imdbID = state.imdbID;
  return (
    <div className="MyMovieDetail">
      MyMovieDetail: {imdbID}
    </div>
  );
}

export default MyMovieDetail;
