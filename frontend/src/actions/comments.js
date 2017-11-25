import { api } from '../utils/api'
import { filter } from 'lodash'
import uuid from 'uuid/v4'

export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const CREATE_POST_COMMENT = 'CREATE_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'
export const VOTE_POST_COMMENT = 'VOTE_POST_COMMENT'
export const FETCH_NUM_COMMENTS = 'FETCH_NUM_COMMENTS'



export const fetchPostCommentsAsync = (postId) => dispatch => {
	api.get(`/posts/${postId}/comments`)
		.then(res => {
			dispatch(fetchPostComments(res.data))
		})
}
const fetchPostComments = (comments) => ({ 
	type: LOAD_POST_COMMENTS, 
	comments
})

export const fetchNumCommentsAsync = (postId, callback) => dispatch => {
	api.get(`/posts/${postId}/comments`)
	.then(res => {
		const comments = filter(res.data, comment => !comment.deleted)
		const length = Object.keys(comments).length
		const num = {postId, length}
		callback(num)
		dispatch(fetchNumComments(num))
	})
}
const fetchNumComments = (num) => ({
	type: FETCH_NUM_COMMENTS,
	payload: num
})


export const deletePostCommentAsync = (commentId, callback) => dispatch => {
	api.delete(`/comments/${commentId}`)
		.then(res => {
			callback()
			dispatch(deletePostComment(res.data))
		})
}
const deletePostComment = (comment) => ({ 
	type: DELETE_POST_COMMENT, 
	comment 
})


export const createPostCommentAsync = (values, callback) => dispatch => {
	const {body, author, parentId} = values
	api.post(`/comments`, {
		id: uuid(),
		timestamp: Date.now(),
		body,
		author,
		parentId
	}).then(res => {
		callback()
		dispatch(createPostComment(res.data))
	})
}
const createPostComment = (data) => ({ 
	type: CREATE_POST_COMMENT,
	data 
})


export const editPostCommentAsync = ({ id, body, author }) => dispatch => {
	api.put(`/comments/${id}`, { body, author })
		.then(res => {
			dispatch(editPostComment(res.data))
		})
}
const editPostComment = (comment) => ({ 
	type: EDIT_POST_COMMENT, 
	comment 
})


// BUG to FIX
export const votePostCommentAsync = ({ commentId, vote }) => dispatch => {
	api.post(`/comments/${commentId}`, { option: vote })
		.then(res => {
			dispatch(votePostComment(res.data))
		})
}
const votePostComment = (data) => ({ 
	type: VOTE_POST_COMMENT, 
	data 
})