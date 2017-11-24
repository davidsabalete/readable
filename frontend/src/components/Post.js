import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostButtons from './PostButtons'
import { connect } from 'react-redux'
import { votePostAsync } from '../actions/post'
import { fetchPostCommentsAsync, fetchNumCommentsAsync } from '../actions/comments'
import { withRouter } from 'react-router'
import FontAwesome from 'react-fontawesome'

class Post extends Component {

	state = {
		numComments: 0
	}

	refresh() {
		const {url} = this.props.match
		this.props.history.push(url)
	}

	componentWillMount() {
		const { id } = this.props.post
		this.props.fetchPostCommentsAsync(id)
		this.props.fetchNumCommentsAsync(id, data => {
			this.setState({ numComments: data.length })
		})
	}

	render() {
		const { post, votePostAsync } = this.props
		const { category, title, timestamp } = post

		if (post.deleted) return <div />

		return (
			<div className="card">
				<div className="card-block">
					<PostButtons post={post} />
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
				<FontAwesome name="comment" /> {this.state.numComments} comments
			</div >
		)
	}
}


const mapStateToProps = ({ comments }) => ({ comments })
const mapDispatchToProps = {
	votePostAsync, 
	fetchPostCommentsAsync,
	fetchNumCommentsAsync
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))