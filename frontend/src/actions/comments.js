import { api } from '../utils/api'
import uuidv4 from 'uuid/v4'

export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const CREATE_POST_COMMENT = 'CREATE_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'
export const VOTE_POST_COMMENT = 'VOTE_POST_COMMENT'

export const fetchPostCommentsAsync = (postId) => dispatch => {
	api.get(`/posts/${postId}/comments`)
		.then(response => response.data)
		.then(
		data => dispatch(fetchPostComments(data)),
		error => console.error(error)
		)
}
const fetchPostComments = (data) => ({ type: LOAD_POST_COMMENTS, data })


export const deletePostCommentAsync = ({ commentId }) => dispatch => {
	api.delete(`/comments/${commentId}`)
		.then(response => response.data)
		.then(
		data => dispatch(deletePostComment(data)),
		error => console.error(error)
		)
}
const deletePostComment = (data) => ({ type: DELETE_POST_COMMENT, data })


export const createPostCommentAsync = ({ body, author, parentId }) => dispatch => {
	api.post(`/comments`, {
		id: uuidv4(),
		timestamp: Date.now(),
		body,
		author,
		parentId
	})
		.then(response => response.data)
		.then(
		data => dispatch(createPostComment(data)),
		error => console.error(error)
		)
}
const createPostComment = (data) => ({ type: CREATE_POST_COMMENT, data })


export const editPostCommentAsync = ({ id, body, author }) => dispatch => {
	api.put(`/comments/${id}`, { body, author })
		.then(response => response.data)
		.then(
		data => dispatch(editPostComment(data)),
		error => console.error(error)
		)
}
const editPostComment = (data) => ({ type: EDIT_POST_COMMENT, data })


export const votePostCommentAsync = ({ commentId, vote }) => dispatch => {
	api.post(`/comments/${commentId}`, { option: vote })
		.then(response => response.data)
		.then(
		data => dispatch(votePostComment(data)),
		error => console.error(error)
		)
}
const votePostComment = (data) => ({ type: VOTE_POST_COMMENT, data })