import {
  LOAD_POST,
  // RESET_POST,
  // CREATE_POST,
  // EDIT_POST,
  // DELETE_POST,
  // VOTE_POST
} from '../actions/post'

const post = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POST:
    // case RESET_POST:
	// case CREATE_POST:
    // case EDIT_POST:
    // case DELETE_POST:
    // case VOTE_POST:
      return action.post
    default:
      return state
  }
}

export default post