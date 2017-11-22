import { api } from '../utils/api'
import uuid from 'uuid/v4'

export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const CREATE_POST_COMMENT = 'CREATE_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'
export const VOTE_POST_COMMENT = 'VOTE_POST_COMMENT'



export const fetchPostCommentsAsync = (postId) => dispatch => {
	api.get(`/posts/${postId}/comments`)
		.then(res => dispatch(fetchPostComments(res.data)))
}
const fetchPostComments = (comments) => ({ 
	type: LOAD_POST_COMMENTS, 
	comments
})


export const deletePostCommentAsync = ({ commentId }) => dispatch => {
	api.delete(`/comments/${commentId}`)
		.then(res => dispatch(deletePostComment(res.data)))
}
const deletePostComment = (comment) => ({ 
	type: DELETE_POST_COMMENT, 
	comment 
})


export const createPostCommentAsync = ({ body, author, parentId }) => dispatch => {
	api.post(`/comments`, {
		id: { uuid }(),
		timestamp: Date.now(),
		body,
		author,
		parentId
	}).then(res => dispatch(createPostComment(res.data)))
}
const createPostComment = (data) => ({ 
	type: CREATE_POST_COMMENT,
	data 
})


export const editPostCommentAsync = ({ id, body, author }) => dispatch => {
	api.put(`/comments/${id}`, { body, author })
		.then(res => dispatch(editPostComment(res.data)))
}
const editPostComment = (comment) => ({ 
	type: EDIT_POST_COMMENT, 
	comment 
})


export const votePostCommentAsync = ({ commentId, vote }) => dispatch => {
	api.post(`/comments/${commentId}`, { option: vote })
		.then(res => dispatch(votePostComment(res.data)))
}
const votePostComment = (data) => ({ 
	type: VOTE_POST_COMMENT, 
	data 
})