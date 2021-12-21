import actions from './actionTypes'
import {aTOz, zTOa, ratingSort} from '../components/hooks/useSort';

const initialState = {
  movies: [],
  sortedMovies: []
}

export default function movies(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {

    case actions.FETCH_MOVIES:
      return {
        ...state,
        movies:  state.movies.concat(payload),
        sortedMovies: state.movies.concat(payload)
      }; 

    case actions.SORT_MOVIES:
      if(payload === "name_asc"){
        return{
        ...state,
        sortedMovies: state.movies.sort(aTOz)
        }
      };
      if(payload === "name_desc"){
        return{
          ...state,
          sortedMovies: state.movies.sort(zTOa)
        }
      };
      if (payload === "rating"){
        return{
          ...state,
          sortedMovies: state.movies.sort(ratingSort)
        }
      };
      
    default: 
      return state
  }
};
