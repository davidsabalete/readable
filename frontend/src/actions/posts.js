import { api } from '../utils/api'

export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS'
export const SORT_POSTS = 'SORT_POSTS'



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

export const sortBy = (sortByField, sortDirection) => ({
	type: SORT_POSTS,
	sortByField,
	sortDirection
})
