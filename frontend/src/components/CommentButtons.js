import React from 'react'
import { Link } from 'react-router-dom'
import { deletePostCommentAsync } from '../actions/comments'
import { fetchPostsAsync } from '../actions/posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import FontAwesome from 'react-fontawesome'


const removeComment = (props) => {
    if (window.confirm('This comment is gonna be removed, right?')) {
        props.deletePostCommentAsync(props.comment.id, () => props.history.push(props.match.url))
    }
}

const CommentButtons = (props) => (
    <div className="action-buttons">
        <Link to={`/edit/comment/${props.comment.id}`} className="btn btn-primary btn-sm">
            <FontAwesome name="pencil" />
        </Link>
        <button className="btn btn-danger btn-sm" onClick={() => removeComment(props)}>
            <FontAwesome name="trash" />
        </button>
    </div>
)

const mapDispatchToProps = {
    deletePostCommentAsync,
    fetchPostsAsync
}
export default withRouter(connect(null, mapDispatchToProps)(CommentButtons))