import React, { useState  } from 'react';
import './styles/MoviesList.css';
import MovieMiniature from './MovieMiniature';
import { useDispatch, useSelector} from 'react-redux';
import { sortMovies } from '../store/actions';




export default function MovieList() {

    const [state, setState] = useState({selectedMovie: null});                                
    const dispatch = useDispatch();
    const {selectedMovie} = state;
    const { sortedMovies} = useSelector(state => state.movieLib);
    
   
    const handleSelectMovie = (item) => (setState({selectedMovie: item}));
  
    const handleChange = e => {
      dispatch(sortMovies(e.target.value))
    };

  
  return(
    <div className="movies-list">
          <div className="sort-div">
            <span>Sort by: </span>
            <select onChange={handleChange} className='sort-select'>
              <option value="name_asc">A to Z</option>
              <option value="name_desc">Z to A</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="miniatureimg">
            {
              sortedMovies.map(movie =>
                <MovieMiniature key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={handleSelectMovie}/>
              )
            }
          </div>
    </div>
  )
};











