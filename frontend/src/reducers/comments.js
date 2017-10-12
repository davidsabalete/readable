import {
  FETCH_POST_COMMENTS,
  CREATE_POST_COMMENT,
  EDIT_POST_COMMENT,
  DELETE_POST_COMMENT,
  VOTE_POST_COMMENT
} from '../actions/comments'

function comments(state = null, action) {
  switch(action.type) {
    case FETCH_POST_COMMENTS:
      return action.data
    case CREATE_POST_COMMENT:
      return action.data
    case EDIT_POST_COMMENT:
      return action.data
    case DELETE_POST_COMMENT:
      return action.data      
    case VOTE_POST_COMMENT:
      return action.data
    default:
      return state
  }
}

export default comments