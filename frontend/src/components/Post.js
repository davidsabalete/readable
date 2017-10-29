import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const { post } = this.props

    if (post.deleted) return <div />

    return (
      <div className="card">
        <div className="card-block">
          <Link to={'/posts/' + post.id} className="card-title"><h4>{post.title}</h4></Link>
          <h6 className="card-subtitle mb-2 text-muted">
            by {post.author} at {new Date(post.timestamp).toString().substr(0,16)}
          </h6>
          <div className="card-text">{post.body}</div>
          <p className="post-details">
            <Link to={'/' + post.category }>
              <span className="badge badge-pill badge-secondary">{post.category}</span></Link>{" "}
              <span className="badge badge-pill badge-primary">{post.voteScore} votes </span>
              
            {/*<i className="fa fa-thumbs-o-up" aria-hidden="true" />{" "}
            <i className="fa fa-thumbs-o-down" aria-hidden="true" />*/}
          </p>
          <p>{post.id}</p>
        </div>
      </div>
    )
  }
}

export default Post