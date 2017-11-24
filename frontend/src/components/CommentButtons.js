import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deletePostCommentAsync } from '../actions/comments'
import { fetchPostsAsync } from '../actions/posts'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import FontAwesome from 'react-fontawesome'

class CommentButtons extends Component {
    removeComment(id) {
        if (window.confirm('This comment is gonna be removed, right?')) {
            this.props.deletePostCommentAsync(id, () => {
                const {url} = this.props.match
                this.props.history.push(url)
                // this.props.fetchPostsAsync()
            })
        }
    }
    render() {
        const { id } = this.props.comment
        // console.log(this.props)
        return (
            <div className="action-buttons">
                <Link to={`/comments/${id}`} className="btn btn-primary btn-sm">
                    <FontAwesome name="pencil" aria-hidden="true" />
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => this.removeComment(id)}>
                    <FontAwesome name="trash" aria-hidden="true" />
                </button>
            </div>
        )
    }
}

export default withRouter(connect(null, { deletePostCommentAsync, fetchPostsAsync })(CommentButtons))