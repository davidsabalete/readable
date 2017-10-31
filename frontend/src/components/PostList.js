import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAsync, fetchCategoryPostsAsync } from '../actions/posts'
import { Link } from 'react-router-dom'
import Post from './Post'


class PostList extends Component {

	state = {
		posts: [],
		category: ''
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		const { category } = this.props.match.params
		if (category) {
			this.props.fetchCategoryPostsAsync(category)
		} else {
			this.props.fetchPostsAsync()
		}
	}

	renderPosts() {
		// console.log(this.props)
		const { posts } = this.props
		if (!posts.length) {
			return <div>No posts for this category</div>
		}

		return this.props.posts.map(post => (
			<Post key={post.id} post={post} />
		))
	}

	render() {
		const { category } = this.props.match.params
		return (
			<div className="container">
				<Link to="/create/post" className="btn btn-primary" style={{ float: 'right' }}>New Post</Link>
				<div className="title-view">
					<h4>{category ? `Posts of category: ${category}` : 'All Posts'}</h4>
				</div>
				<div>
					{this.renderPosts()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
})
export default connect(mapStateToProps, {
	fetchPostsAsync,
	fetchCategoryPostsAsync
})(PostList)