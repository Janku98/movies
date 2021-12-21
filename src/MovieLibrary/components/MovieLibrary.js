import React, { useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchMovies} from '../store/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import logo from '../assets/logo.svg';
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

  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(4);
  const {movies} = props

  const fetchData = () =>{
    dispatch(fetchMovies(page));
    setPage(page + 1);
    if(page === 87){
      setHasMore(false);
    };
  };
  
  return (
    <div className="MovieLibrary">

        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        
        <InfiniteScroll
            dataLength={movies.length} 
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p> }>
            {
              <div className="ML-intro">
                {movies.length && <MoviesList movies={movies}/> }
              </div>
              }
        </InfiniteScroll>

      </div>
  );
}



export default connect(state => ({
  movies: getMovies(state)
}), {fetchMovies})(MovieLibrary)
