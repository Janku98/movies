import actions from '../../actionTypes';
import axios from 'axios';
import API_KEY from '../../KEY';

export function fetchMovies(pageNumber) {
  return async function (dispatch){
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);
    console.log("RES", res.data.results)
    dispatch({
    type: actions.FETCH_MOVIES,
    payload: res.data.results
    })
  }
};

// export function sortMovie(state) {
//   return {
//     type: actions.SORT_MOVIES,
//     payload: state
//   }
// };

