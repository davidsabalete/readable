import { 
  LOAD_POSTS, 
  LOAD_CATEGORY_POSTS,
} from '../actions/posts'

const posts = (state = [], action) => {
  switch(action.type) {
    case LOAD_POSTS : 
    case LOAD_CATEGORY_POSTS :
      return action.posts
    default :
      return state
  }
}

export default posts