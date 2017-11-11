import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from './ActionButtons'
import { connect } from 'react-redux'
import { votePostAsync } from '../actions/post'
import { withRouter } from 'react-router'

class Post extends Component {
	render() {
		const { post, votePostAsync } = this.props
		const { category, title, timestamp } = post

		if (post.deleted) return <div />

		return (
			<div className="card">
				<div className="card-block">
					<ActionButtons post={post} />
					<Link to={`/${category}/${post.id}`} className="card-title"><h4>{title}</h4></Link>
					<i className="fa fa-calendar" /> {new Date(timestamp).toString().substr(0, 16)}
					{' '}
					<Link to={`/${category}`}>
						<span className="badge badge-pill badge-secondary">{category}</span>
					</Link>{" "}
					<span className="badge badge-pill badge-primary">{post.voteScore} votes </span>{" "}
					<i className="fa fa-thumbs-o-up" onClick={() => { 
						votePostAsync(post.id, 'upVote')
						this.props.history.push('/')
					 }} />{" "}
					<i className="fa fa-thumbs-o-down" onClick={() => {
						votePostAsync(post.id, 'downVote')
						this.props.history.push('/')
					}} />
				</div>
			</div >
		)
	}
}
export default withRouter(connect(null, { votePostAsync })(Post))