import React, { Component, PureComponent, useState  } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TMDBImage from './TMDBImage';
import './styles/MoviesList.css';
import MovieMiniature from './MovieMiniature';
import SortingOptions from './SortingOptions';


export default function MovieList(props) {

  //Ex static
  let propTypes = {
    movies: PropTypes.array.isRequired
  };

  const [state, setState] = useState({selectedMovie: null});

  const handleSelectMovie = (item) => (setState({selectedMovie: item}) );  
  
  const {movies} = props;
  
  const handleSortingChange = (sortingType) => console.log(sortingType);

  
  const {selectedMovie} = state;

  return(
    <div className="movies-list">
        
          <div>
            <span>Sort by:</span>
            <SortingOptions onChange={handleSortingChange}/>
          </div>

          <div className="miniatureimg">
            {
              movies.map(movie =>
                // <MovieListItem key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={handleSelectMovie}/>
                <MovieMiniature key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={handleSelectMovie}/>
              )
            }
          </div>
          
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






