import React, { Component } from 'react';
import logo from './logo.svg';
import FilmListing from "./FilmListing.js"
import FilmDetails from "./FilmDetails.js"
import TMDB from "./TMDB.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films = {TMDB.films} />
        <FilmDetails films = {TMDB.films} />

      
      </div>
    );
  }
}

export default App;
