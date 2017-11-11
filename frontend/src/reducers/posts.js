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
      const desc = action.sortByField.charAt(0) === '-'
      const sortField = desc ? action.sortByField.slice(1) : action.sortByField
      return orderBy([...state], [sortField], [desc ? 'desc': 'asc'])
    default :
      return state
  }
}

export default posts