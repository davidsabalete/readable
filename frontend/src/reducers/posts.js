import { orderBy } from 'lodash'
import { 
  LOAD_POSTS, 
  LOAD_CATEGORY_POSTS,
  SORT_POSTS,
} from '../actions/posts'

const posts = (state = [], action) => {
  switch(action.type) {
    case LOAD_POSTS : 
    case LOAD_CATEGORY_POSTS :
      return action.posts
    case SORT_POSTS :
      const { sortByField, sortDirection } = action
      console.log([...state], sortByField, sortDirection)
      return orderBy([...state], [sortByField], [sortDirection])
    default :
      return state
  }
}

export default posts