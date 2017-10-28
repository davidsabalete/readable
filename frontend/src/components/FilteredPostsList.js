import React, { Component } from 'react'
import { fetchCategoryPosts } from '../actions/posts'
import Post from './Post'

class FilteredPostsList extends Component {

	state = {
    posts: []
	}
	
	componentDidMount() {
		fetchCategoryPosts()
			.then(data => {
				this.setState({ posts: data })
			})
	}

  renderPosts() {
    return this.state.posts.map(post => (
      <Post key={post.id} post={post} />
    ))
  }

	render() {
		const { category } = this.props.match.params

		return (
			<div>
				Filtered post by category: {category}
				<div className="post-list">
					{this.renderPosts()}
				</div>
			</div>
		)
	}
}

export default FilteredPostsList