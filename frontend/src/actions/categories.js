import { api } from '../utils/api'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export const fetchCategories = () => dispatch => {
  api
    .get('/categories')
    .then(res => dispatch(loadCategories(res.data)))
} 
export const loadCategories = (data) => ({
  type: LOAD_CATEGORIES,
  payload: data
})