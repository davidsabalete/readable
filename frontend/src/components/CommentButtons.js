import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deletePostCommentAsync } from '../actions/comments'
import { fetchPostsAsync } from '../actions/posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import FontAwesome from 'react-fontawesome'

class CommentButtons extends Component {

    refresh() {
        const {url} = this.props.match
        this.props.history.push(url)
    }

    removeComment(id) {
        if (window.confirm('This comment is gonna be removed, right?')) {
            this.props.deletePostCommentAsync(id, () => this.refresh())
        }
    }
    render() {
        const { id } = this.props.comment
        // console.log(this.props)
        return (
            <div className="action-buttons">
                <Link to={`/comments/${id}`} className="btn btn-primary btn-sm">
                    <FontAwesome name="pencil" />
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => this.removeComment(id)}>
                    <FontAwesome name="trash" />
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deletePostCommentAsync, 
    fetchPostsAsync
}
export default withRouter(connect(null, mapDispatchToProps)(CommentButtons))