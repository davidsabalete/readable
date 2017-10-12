import {
  FETCH_POSTS,
  FETCH_CATEGORY_POSTS
} from '../actions/posts'

function posts(state = [], action) {
  switch(action.type) {
    case FETCH_POSTS:
      return action.data
    case FETCH_CATEGORY_POSTS:
      return action.data
    default:
      return state
  }
}

export default posts