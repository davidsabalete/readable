import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAsync, fetchCategoryPostsAsync } from '../actions/posts'
import Header from './Header'
import Footer from './Footer'
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
		return (
			<div className="App">
				<Header />
				<div className="container">
					{this.renderPosts()}
				</div>
				<Footer />
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