import React from 'react';

import MyMovies from './MyMovies';
import MyMovieDetail from './MyMovieDetail';
import Search from './Search';
import SearchDetail from './SearchDetail';
import view from './view';

import './App.css';
import './tabs.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickMyMovies = this.clickMyMovies.bind(this);
    this.clickSearch = this.clickSearch.bind(this);

    // Initial state
    this.state = {
      currentView: view.search,
      searchForm: {
        searchText: '',
        type: '',
        year: '',
      },
      searchResults: null,
      searchDetail: null,
      myMoviesForm: {
        sort: '',
        watched: '',
        rating: '',
      },
      myMovies: null,
      myMovieDetail: null,
      myMovieDetailForm: {
        comment: '',
        rating: '',
        watched: false,
      },
    };
  }

  clickMyMovies() {
    this.setState({
      myMovies: null, // Forces a refresh in MyMovies
      currentView: view.myMovies,
    });
  }

  clickSearch() {
    this.setState({
      currentView: view.search,
    });
  }

  render() {
    const currentView = this.state.currentView;
    let content;
    if (currentView === view.search) {
      content = <Search app={this} />
    }
    else if (currentView === view.searchDetail) {
      content = <SearchDetail app={this} />
    }
    else if (currentView === view.myMovies) {
      content = <MyMovies app={this} />
    }
    else if (currentView === view.myMovieDetail) {
      content = <MyMovieDetail app={this} />
    }

    return (
      <div className="App">
        <h1>
          <img className="logo" alt="Autodesk" src="/Autodesk_logo_193x32.png" />
          &nbsp;Code Challenge
        </h1>
        <div className="tabbed round">
          <ul>
            <li key={view.myMovies}
              className={this.state.currentView === view.myMovies ? 'active' : ''}
              onClick={this.clickMyMovies}
            >My Movies</li>
            <li key={view.search}
              className={this.state.currentView === view.search ? 'active' : ''}
              onClick={this.clickSearch}
            >Search</li>
          </ul>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
