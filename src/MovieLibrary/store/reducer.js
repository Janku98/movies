import actions from '../../actionTypes'
import { aTOz, zTOa } from '../components/hooks/useSort'

const initialState = {
  movies: []
}

export default function movies(state = initialState, action) {
  const {type, payload} = action
  switch (type) {

    case actions.FETCH_MOVIES:{
      return {
        ...state,
        movies: payload
      }
    };
    case actions.SORT_MOVIES:{
      if(action.payload === "name_asc"){
        return{
          ...state,
          movies: state.movies.sort(aTOz)
        }
      }
      else if(action.payload === "name_desc"){
        return{
          ...state,
          movies: state.movies.sort(zTOa)
        }
      }
    };
      
    default:
      return state
  }
}
