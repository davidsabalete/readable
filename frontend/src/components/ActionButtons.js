import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deletePostAsync } from '../actions/post'
import { fetchPostsAsync } from '../actions/posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class ActionButtons extends Component {
    removePost(id) {
        if (window.confirm('This post is gonna be removed, right?')) {
            this.props.deletePostAsync(id, () => {
                this.props.history.push('/')
                this.props.fetchPostsAsync()
            })
        }
    }
    render() {
        const { id } = this.props.post
        // console.log(this.props)
        return (
            <div className="action-buttons">
                <Link to={`/edit/post/${id}`} className="btn btn-primary btn-sm">
                    <i className="fa fa-pencil" aria-hidden="true" />
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => this.removePost(id)}>
                    <i className="fa fa-trash-o" aria-hidden="true" />
                </button>
            </div>
        )
    }
}

export default withRouter(connect(null, { deletePostAsync, fetchPostsAsync })(ActionButtons))