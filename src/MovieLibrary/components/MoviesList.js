import React, { Component, PureComponent, useState  } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TMDBImage from './TMDBImage'
import './MoviesList.css'


export default function MovieList(props) {

  //Ex static
  let propTypes = {
    movies: PropTypes.array.isRequired
  };

  const [state, setState] = useState({selectedMovie: null});

  const handleSelectMovie = (item) => setState({selectedMovie: item}); 
  
  const handleSortingChange = (sortingType) => console.log(sortingType);

  const {movies} = props;
  const {selectedMovie} = state;

  return(
    <div className="movies-list">
        <div className="items">
          <div>
            <span>Sort by:</span>
            <SortingOptions onChange={handleSortingChange}/>
          </div>
          {
            movies.map(movie =>
              <MovieListItem key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={handleSelectMovie}/>
            )
          }
        </div>
        {
          selectedMovie && (
            <ExpandedMovieItem movie={selectedMovie} />
          )
        }
      </div>
  )
};




const ExpandedMovieItem = ({movie: {title, original_title, poster_path, overview, vote_average, vote_count}}) => (
  <div className="expanded-movie-item">
    <TMDBImage src={poster_path} className="poster" />
    <div className="description">
      <h2>{title}({original_title})</h2>
      <div><h4>Rank(votes count)</h4>: <span>{vote_average}({vote_count})</span></div>
      <span>{overview}</span>
    </div>
  </div>
);



const MovieListItem = (props) => {

  const handleClick = () =>{
    const {movie, onSelect} = props;
    onSelect(movie);
  };

  const {movie: {title, vote_average}, isSelected} = props;

  return(
    <div className={classNames('movie-list-item', {'selected': isSelected})} onClick={handleClick}>{title}({vote_average})</div>
  )
};



const SortingOptions = (props) => {

  const [state, setState]= useState({value: ""});

  const handleChange = e => {
    const selectedValue = e.target.value;
    const {onChange} = props;
    setState({value: selectedValue});
    onChange(selectedValue);
  };

  return(
    <select value={state.value} onChange={handleChange}>
        <option value=""></option>
        <option value="name_asc">A -> Z</option>
        <option value="name_desc">Z -> A</option>
        <option value="rating">Rating</option>
      </select>
  );
};



