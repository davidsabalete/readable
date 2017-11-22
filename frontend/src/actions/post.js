import { api } from '../utils/api'
import uuid from 'uuid/v4'

export const LOAD_POST = 'LOAD_POST'
export const CREATE_POST = 'CREATE_POST'
export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const RESET_POST = 'RESET_POST'
export const UPDATE_POST = 'UPDATE_POST'



export const fetchPostAsync = (id, callback) => dispatch => {
	api.get(`/posts/${id}`)
		.then(res => {
			dispatch(loadPost(res.data))
			if (callback) {
				callback(res.data)
			}
		})
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
			dispatch(createPost(res.data))
			if (callback) {
				callback(res.data)
			}
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


export const deletePostAsync = (id, callback) => dispatch => {
	api.delete(`/posts/${id}`)
		.then(() => {
			dispatch(deletePost(id))
			if (callback) {
				callback()
			}
		})
}
const deletePost = (id) => ({
	type: DELETE_POST,
	id
})


export const resetPost = () => ({ type: RESET_POST, post: {} })


export const updatePostAsync = (post, callback) => dispatch => {
	console.log('updatePostAsync')
	api.put(`/posts/${post.id}`, {title: post.title, body: post.body})
		.then(res => {
			dispatch(updatePost(res.data))
			if (callback) {
				callback()
			}
		})
}
const updatePost = (post) => ({
	type: UPDATE_POST,
	post
})