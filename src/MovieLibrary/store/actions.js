import actions from './actionTypes';
import axios from 'axios';
import API_KEY from '../../KEY';

export function fetchMovies(pageNumber) {
  return async function (dispatch){
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);
    
    dispatch({
    type: actions.FETCH_MOVIES,
    payload: res.data.results
    })
  }
};

export function sortMovies(sortOption){
  return function(dispatch){
    dispatch({
      type: actions.SORT_MOVIES,
      payload: sortOption
    })
  }
};


