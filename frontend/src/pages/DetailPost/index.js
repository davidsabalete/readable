import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPostAsync, votePostAsync } from '../../actions/post'
import { fetchPostCommentsAsync } from '../../actions/comments'
import { isEmpty } from 'lodash'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PostButtons from '../../components/PostButtons'
import FontAwesome from 'react-fontawesome'
import Comment from '../../components/Comment'

class DetailPost extends Component {

	state = {
		id: '',
		category: ''
	}

	componentWillMount() {
		const { id, category } = this.props.match.params
		this.setState({ id, category })

		this.props.fetchPostAsync(id)
		this.props.fetchPostCommentsAsync(id)
	}

	vote(voteValue) {
		const { id } = this.props.match.params
		this.props.votePostAsync(id, voteValue)
	}

	renderComments(comments) {
		console.log(comments.length)
		return (
			<div>
				<h5><FontAwesome name="comment" />  {comments.length} Comments </h5>
				{comments.length > 0 && comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
			</div>
		)
	}

	render() {
		const { post, comments } = this.props
		// console.log(comments)
		if (isEmpty(post)) {
			return (
				<div className="App">
					<Header />
					<div className="container">
						<div className="card alert alert-warning" role="alert">
							Post not found
						</div>
					</div>
					<Footer />
				</div>
			)
		}

		return (
			<div className="App">
				<Header />
				<div className="container">
					<article className="card">
						<FontAwesome name="hand-o-left"
							onClick={() => this.props.history.goBack()}
						/>
						<PostButtons post={post} />
						<h4>{post.title}</h4>
						<p>{post.body}</p>
						<p className="date-info">
							<FontAwesome name="calendar" /> {new Date(post.timestamp).toString().substr(0, 16)}
							<FontAwesome name="user" /> {post.author}
						</p>
						<div className="action-buttons">
							<Link to={`/${post.category}/${post.id}/create/comment`}
								className="btn btn-primary btn-sm">
								<FontAwesome name="comment-o" aria-hidden="true" /> Leave a comment
							</Link>
						</div>
						<p>
							<Link to={'/' + post.category}>
								<span className="badge badge-pill badge-secondary">{post.category}</span>
							</Link>{" "}
							<span className="badge badge-pill badge-primary">{post.voteScore} votes </span>{" "}
							<FontAwesome name="thumbs-o-up" onClick={() => this.vote('upVote')} />{" "}
							<FontAwesome name="thumbs-o-down" onClick={() => this.vote('downVote')} />
						</p>
						{!isEmpty(comments) && this.renderComments(comments)}
					</article>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ post, comments }) => ({ post, comments })
// const mapStateToProps = (state, ownProps) => ({ post: state.post })
export default connect(mapStateToProps, {
	fetchPostAsync,
	votePostAsync,
	fetchPostCommentsAsync
})(DetailPost)