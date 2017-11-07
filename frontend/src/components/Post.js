import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { fetchPostAsync, votePostAsync } from '../actions/post'
import ActionButtons from './ActionButtons'

class Post extends Component {

	render() {
		const { post, onVote } = this.props
		const { category, title, timestamp } = post

		if (post.deleted) return <div />

		return (
			<div className="card">
				<div className="card-block">
					<ActionButtons post={post} />
					<Link to={`/${category}/${post.id}`} className="card-title"><h4>{title}</h4></Link>
					{new Date(timestamp).toString().substr(0, 16)}
					<Link to={`/${category}`}>
						<span className="badge badge-pill badge-secondary">{category}</span>
					</Link>{" "}
					<span className="badge badge-pill badge-primary">{post.voteScore} votes </span>{" "}
					<i className="fa fa-thumbs-o-up" aria-hidden="true" onClick={() => this.props.onVote(post.id, 'upVote')} />{" "}
					<i className="fa fa-thumbs-o-down" aria-hidden="true" onClick={() => this.props.onVote(post.id, 'downVote')} />
				</div>
			</div >
		)
	}
}
export default Post