import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from './ActionButtons'

class Post extends Component {
  render() {
    const { post } = this.props
    const { id, category, title, timestamp, voteScore } = post

    if (post.deleted) return <div />

    return (
      <div className="card">
        <div className="card-block">
          <ActionButtons post={post} />
          <Link to={`/${category}/${id}`} className="card-title"><h4>{title}</h4></Link>
          {new Date(timestamp).toString().substr(0, 16)}
          <Link to={`/${category}`}>
            <span className="badge badge-pill badge-secondary">{category}</span>
          </Link>{" "}
          <span className="badge badge-pill badge-primary">{voteScore} votes </span>
        </div>
      </div >
    )
  }
}

export default Post