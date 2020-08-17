import React from 'react';
import logo from './logo.svg';
import './ReactApp.css';

function ReactApp() {
  return (
    <div className="ReactApp">
      <header className="ReactApp-header">
        <img src={logo} className="ReactApp-logo" alt="logo" />
        <p>
          Edit <code>src/ReactApp.js</code> and save to reload.
        </p>
        <a
          className="ReactApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ReactApp;
