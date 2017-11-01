import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPostAsync, votePostAsync } from '../actions/post'
import Header from './Header'
import Footer from './Footer'

class DetailPost extends Component {

	componentWillMount() {
		this.props.fetchPostAsync(this.props.match.params.id)
	}

	vote(voteValue) {
		const { id } = this.props.match.params
		this.props.votePostAsync(id, voteValue)
	}

	render() {
		const { post } = this.props
		if (!post) {
			return (
				<div className="alert alert-warning" role="alert">
					Post not found
				</div>
			)
		}

		return (
			<div className="App">
				<Header />
				<div className="container">
					<article>
						<h4>{post.title}</h4>
						<p className="">
							by {post.author} at {new Date(post.timestamp).toString().substr(0, 16)}
						</p>
						<p>{post.body}</p>
						<Link to={'/' + post.category}>
							<span className="badge badge-pill badge-secondary">{post.category}</span></Link>{" "}
						<span className="badge badge-pill badge-primary">{post.voteScore} votes </span>{" "}
						<i className="fa fa-thumbs-o-up" aria-hidden="true" onClick={() => this.vote('upVote')} />{" "}
						<i className="fa fa-thumbs-o-down" aria-hidden="true" onClick={() => this.vote('downVote')} />
					</article>
					{/* <p>{post.id}</p> */}
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({ post: state.post })
export default connect(mapStateToProps, {
	fetchPostAsync,
	votePostAsync
})(DetailPost)