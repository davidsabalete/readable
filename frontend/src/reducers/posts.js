import { 
  LOAD_POSTS, 
  LOAD_CATEGORY_POSTS 
} from '../actions/posts'

const posts = (state = [], action) => {
  switch(action.type) {
    case LOAD_POSTS :
      const posts = action.payload
      console.log(action)
      return [...posts]
    case LOAD_CATEGORY_POSTS :
      const { category } = action.payload
      return posts.filter( post => ( post.category === category ) )
    default :
      return state
  }
}

export default posts