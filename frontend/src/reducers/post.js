import {
  LOAD_POST,
  VOTE_POST,
  CREATE_POST,
  DELETE_POST,
  // RESET_POST,
  // EDIT_POST,
} from '../actions/post'

const post = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POST:
    case VOTE_POST:
    case CREATE_POST:
    // case RESET_POST:
    // case EDIT_POST:
    return action.post
    case DELETE_POST:
      console.log(state)
      return [...state].filter((post) => { return post.id !== action.id})
    default:
      return state
  }
}

export default post