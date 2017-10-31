import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const { post } = this.props

    if (post.deleted) return <div />

    return (
      <div className="card">
        <div className="card-block">
          <Link to={'/' + post.category + '/' + post.id} className="card-title"><h4>{post.title}</h4></Link>
          <Link to={'/' + post.category}>
            <span className="badge badge-pill badge-secondary">{post.category}</span>
          </Link>{" "}
          <span className="badge badge-pill badge-primary">{post.voteScore} votes </span>
        </div>
      </div>
    )
  }
}

export default Post