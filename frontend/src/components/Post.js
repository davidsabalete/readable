import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const { post } = this.props

    if (post.deleted) return <div />

    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{post.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            by {post.author} at {new Date(post.timestamp).toString().substr(0,16)}
          </h6>
          <div className="card-text">{post.body}</div>
          <p className="post-details">
            category: <Link to={'/' + post.category }>{post.category}</Link> | votes: {post.voteScore}{" "}
            <i className="fa fa-thumbs-o-up" aria-hidden="true" />{" "}
            <i className="fa fa-thumbs-o-down" aria-hidden="true" />
          </p>
          <p>{post.id}</p>
        </div>
      </div>
    )
  }
}

export default Post