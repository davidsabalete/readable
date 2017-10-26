import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategoryPosts } from '../actions/posts'

class PostList extends Component {

  componentWillMount() {
    const { filter } = this.props
    if (filter) {
      this.props.fetchCategoryPosts(filter)
    } else {
      this.props.fetchPosts()
    }
  }

  renderPosts () {
    const { posts } = this.props
    if (posts) {
      return posts.map(post => (
        <Post key={post.id} post={post} />
      ))
    }
  }

  render() {
    return (
      <div>
        <div className="post-list">
          { this.renderPosts() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { posts } = state
	return { posts }
}
export default connect(mapStateToProps, { 
  fetchPosts, 
  fetchCategoryPosts 
})(PostList)