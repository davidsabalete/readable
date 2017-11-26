import { api } from '../utils/api'
import { 
	LOAD_POSTS, 
	LOAD_CATEGORY_POSTS, 
	SORT_POSTS 
} from './constants'

export const fetchPostsAsync = () => dispatch => {
	api.get(`/posts`)
		.then(res => dispatch(loadPosts(res.data)))
}
const loadPosts = (posts) => ({
	type: LOAD_POSTS,
	posts
})

export const fetchCategoryPostsAsync = (category) => dispatch => {
	api.get(`/${category}/posts`)
		.then(res => dispatch(loadCategoryPosts(res.data)))
}
const loadCategoryPosts = (posts) => ({
	type: LOAD_CATEGORY_POSTS,
	posts
})

export const sortPosts = (sortByField) => ({
	type: SORT_POSTS,
	sortByField
})
