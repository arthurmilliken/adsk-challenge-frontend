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
    // Initial state
    this.state = {
      currentView: view.search,
      search: {
        form: {
          searchText: '',
          type: '',
          year: '',
        },
        results: null,
        detail: null,
      },
      myMovies: {
        form: {
          sort: '',
          watched: false,
          rating: '',
        },
        movies: null,
        detail: null,
      },
    };
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
              onClick={() => { this.setState({currentView: view.myMovies}); }}
            >My Movies</li>
            <li key={view.search}
              className={this.state.currentView === view.search ? 'active' : ''}
              onClick={() => { this.setState({currentView: view.search}); }}
            >Search</li>
          </ul>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
