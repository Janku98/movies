import React, { Component, PureComponent, useState  } from 'react';
import TMDBImage from './TMDBImage';
import './styles/MoviesList.css';
import MovieMiniature from './MovieMiniature';
import {aTOz, zTOa, ratingSort} from './hooks/useSort';


export default function MovieList(props) {

    const [state, setState] = useState({selectedMovie: null, value: "name_asc"});
                                        
    const handleSelectMovie = (item) => (setState({selectedMovie: item}) );  
    const {selectedMovie} = state;
    
    //Sort Functions
    var moviesFiltered = props.movies;
    if (state.value === "name_asc") { moviesFiltered = props.movies.sort(aTOz)};
    if (state.value === "name_desc"){ moviesFiltered = props.movies.sort(zTOa)};
    if (state.value === "rating"){moviesFiltered = props.movies.sort(ratingSort)};
  
    const handleChange = e => {
      setState({value: e.target.value});
    };

  
  return(
    <div className="movies-list">
          <div>
            <span>Sort by:</span>
            <select onChange={handleChange}>
              <option value="name_asc">A -> Z</option>
              <option value="name_desc">Z -> A</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="miniatureimg">
            {
              moviesFiltered.map(movie =>
                <MovieMiniature key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={handleSelectMovie}/>
              )
            }
          </div>
    </div>
  )
};











