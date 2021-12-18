import actions from '../../actionTypes'
import topRatedMovies from '../mocks/topTatedMovies'

export function fetchTopRatedMovies() {
  return {
    type: actions.FETCH_MOVIES,
    payload: topRatedMovies
  }
};

export function sortMovie(state) {
  return {
    type: actions.SORT_MOVIES,
    payload: state
  }
};

