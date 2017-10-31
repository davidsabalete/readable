import { api } from '../utils/api'

export const LOAD_POST = 'LOAD_POST'
export const VOTE_POST = 'VOTE_POST'


export const fetchPostAsync = (id) => dispatch => {
	api.get(`/posts/${id}`)
		.then(res => dispatch(loadPost(res.data)))
}
const loadPost = (post) => ({
	type: LOAD_POST,
	post
})

export const votePostAsync = (id, vote) => dispatch => {
	api.post(`/posts/${id}`, { option: vote })
		.then(res => {
			console.log(res)
			dispatch(loadPost(res.data))
		})
}
const votePost = (vote) => ({
	type: VOTE_POST,
	vote
})