import React, { Component, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchTopRatedMovies} from '../store/actions';


import logo from './logo.svg';
import './styles/MovieLibrary.css';
import {getMovies} from '../store/selectors';
import MoviesList from './MoviesList';

export const MovieLibrary = (props) => {

  const {movies} = props

  useEffect(()=>{
    const {fetchTopRatedMovies} = props;
    fetchTopRatedMovies();
  });

  

  return (
    <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        <div className="ML-intro">
          { movies.length && <MoviesList movies={movies}/> }
        </div>
      </div>
  );
}



export default connect(state => ({
  movies: getMovies(state)
}), {fetchTopRatedMovies})(MovieLibrary)
