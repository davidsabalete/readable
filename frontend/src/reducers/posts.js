import { 
  LOAD_POSTS, 
  LOAD_CATEGORY_POSTS,
  LOAD_POST
} from '../actions/posts'

const posts = (state = [], action) => {
  switch(action.type) {
    case LOAD_POSTS : 
    case LOAD_CATEGORY_POSTS :
      return action.posts
    case LOAD_POST :
      console.log(action)
      return action.post
    default :
      return state
  }
}

export default posts