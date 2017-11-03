import { api } from '../utils/api'
import { uuid } from '../utils/uuid'

export const LOAD_POST = 'LOAD_POST'
export const CREATE_POST = 'CREATE_POST'
export const VOTE_POST = 'VOTE_POST'


export const fetchPostAsync = (id) => dispatch => {
	api.get(`/posts/${id}`)
		.then(res => dispatch(loadPost(res.data)))
}
const loadPost = (post) => ({
	type: LOAD_POST,
	post
})


export const createPostAsync = (values, callback) => dispatch => {
	const { author, title, body, category } = values
	const data = {
		id: uuid(),
		timestamp: Date.now(),
		title,
		body,
		author,
		category
	}
	api.post(`/posts`, data)
		.then(res => {
			callback()
			dispatch(createPost(res.data))
		})
}
const createPost = (post) => ({
	type: CREATE_POST,
	post
})


export const votePostAsync = (id, vote) => dispatch => {
	api.post(`/posts/${id}`, { option: vote })
		.then(res => {
			dispatch(votePost(res.data))
		})
}
const votePost = (post) => ({
	type: VOTE_POST,
	post
})
