import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from './ActionButtons'
import { connect } from 'react-redux'
import { votePostAsync } from '../actions/post'
import { fetchPostCommentsAsync } from '../actions/comments'
import { withRouter } from 'react-router'
import FontAwesome from 'react-fontawesome'

class Post extends Component {

	refresh() {
		const {url} = this.props.match
		this.props.history.push(url)
	}

	componentDidMount() {
		const { id } = this.props.post
		this.props.fetchPostCommentsAsync(id)
	}

	render() {
		const { post, votePostAsync } = this.props
		const { category, title, timestamp } = post

		if (post.deleted) return <div />

		return (
			<div className="card">
				<div className="card-block">
					<ActionButtons post={post} />
					<Link to={`/${category}/${post.id}`} className="card-title"><h4>{title}</h4></Link>
					<FontAwesome name="calendar" /> {new Date(timestamp).toString().substr(0, 16)}
					{' '}
					<Link to={`/${category}`}>
						<span className="badge badge-pill badge-secondary">{category}</span>
					</Link>{" "}
					<span className="badge badge-pill badge-primary">{post.voteScore} votes </span>{" "}
					<FontAwesome name="thumbs-o-up" onClick={() => { 
						votePostAsync(post.id, 'upVote')
						this.refresh()
					 }} />{" "}
					<FontAwesome name="thumbs-o-down" onClick={() => {
						votePostAsync(post.id, 'downVote')
						this.refresh()
					}} />{" "}
					

				</div>
				<FontAwesome name="comment" /> {2} comments
			</div >
		)
	}
}
const mapDispatchToProps = {
	votePostAsync, 
	fetchPostCommentsAsync
}
export default withRouter(connect(null, mapDispatchToProps)(Post))