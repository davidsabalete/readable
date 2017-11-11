import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAsync, fetchCategoryPostsAsync, sortPosts } from '../actions/posts'
import { votePostAsync } from '../actions/post'
import Header from './Header'
import Footer from './Footer'
import Post from './Post'
import { orderBy, filter } from 'lodash'


class PostList extends Component {

	state = {
		category: '',
		sortByField: 'voteScore',
		sortDirection: 'desc'
	}

	componentDidMount() {
		this.fetchData()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params !== this.props.match.params) {
			this.fetchData()
		}
	}

	fetchData() {
		const { category } = this.props.match.params
		if (category) {
			this.props.fetchCategoryPostsAsync(category)
		} else {
			this.props.fetchPostsAsync()
		}
	}

	vote(idPost, strVote) {
		votePostAsync(idPost, strVote)
		console.log('vote', idPost, strVote)
	}

	renderPosts = () => {
		const { posts } = this.props
		if (!posts.length) {
			return <div>There are not posts for this category</div>
		}
		const orderedPosts = orderBy(posts, [this.state.sortByField], [this.state.sortDirection])
		return orderedPosts.map(post => (
			<Post key={post.id} post={post} onVote={this.vote} />
		))
	}

	onFieldChange = e => {
		const { value } = e.target
		this.setState({ sortByField: value })
		this.props.sortBy(value, this.state.sortDirection)
	}

	onDirectionChange = e => {
		const { value } = e.target
		this.setState({ sortDirection: value })
		this.props.sortBy(this.state.sortByField, value)
	}

	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="order-controls form-group">
						Order by:
                		<select value={this.state.sortByField} onChange={this.onFieldChange}>
							<option value="voteScore">Votes</option>
							<option value="timestamp">Date</option>
						</select>
						<select value={this.state.sortDirection} onChange={this.onDirectionChange}>
							<option value="asc">Ascending</option>
							<option value="desc">Descending</option>
						</select>
					</div>
					{this.renderPosts()}
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const posts = filter(state.posts, post => !post.deleted)
	const { sortByField, sortDirection } = state
	return {
		posts,
		sortByField,
		sortDirection
	}
}
export default connect(mapStateToProps, {
	fetchPostsAsync,
	fetchCategoryPostsAsync,
	sortPosts,
	votePostAsync
})(PostList)