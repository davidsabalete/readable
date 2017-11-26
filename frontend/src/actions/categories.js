import { api } from '../utils/api'
import { 
	LOAD_CATEGORIES 
} from './constants'


export const fetchCategoriesAsync = () => dispatch => {
	api.get('/categories')
		.then(res => dispatch(loadCategories(res.data)))
}
const loadCategories = (data) => ({
	type: LOAD_CATEGORIES,
	payload: data
})