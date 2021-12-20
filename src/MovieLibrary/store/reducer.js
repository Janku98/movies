import actions from '../../actionTypes'

const initialState = {
  movies: []
}

export default function movies(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {

    case actions.FETCH_MOVIES:
      return {
        ...state,
        movies:  state.movies.concat(payload)
      };    
      
    default:
      console.log("entro al default ") 
      return state
  }
}
