import React, { Component, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchMovies} from '../store/actions';
import InfiniteScroll from 'react-infinite-scroll-component';


import logo from './logo.svg';
import './styles/MovieLibrary.css';
import {getMovies} from '../store/selectors';
import MoviesList from './MoviesList';

export const MovieLibrary = (props) => {

  useEffect(()=>{
    const {fetchMovies} = props;
    fetchMovies(1);
    fetchMovies(2) ;
    fetchMovies(3);
  },[]);
  
  const [items, setItems] = useState([]);
  const {movies} = props

  const fetchData = () =>{
    
  }
  
  return (
    <div className="MovieLibrary">

        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        
        <InfiniteScroll
            dataLength={items.length} 
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p> }>
            {items}
        </InfiniteScroll>

        <div className="ML-intro">
          { movies.length && <MoviesList movies={movies}/> }
        </div>

      </div>
  );
}



export default connect(state => ({
  movies: getMovies(state)
}), {fetchMovies})(MovieLibrary)
