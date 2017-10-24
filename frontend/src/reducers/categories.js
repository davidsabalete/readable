import { 
  LOAD_CATEGORIES
} from '../actions/categories'

const categories = (state = [], action) => {
  switch(action.type) {
    case LOAD_CATEGORIES :
      console.log(action)
      const { categories } = action.payload
      return [...categories]
    default: 
      return state
  }
}

export default categories