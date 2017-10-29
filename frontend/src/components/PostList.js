import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { fetchPosts, fetchCategoryPosts } from '../actions/posts'

class PostList extends Component {

  state = {
    posts: [],
    category: ''
  }

  componentDidMount() {
    const { category } = this.props.match.params
    console.log(category)
    if (category) {
      this.props.fetchCategoryPosts(category)
    } else {
      this.props.fetchPosts()
    }
  }

  renderPosts() {
    if (this.props.posts.length === 0) {
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
        <div className="category-title">
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
  fetchPosts,
  fetchCategoryPosts
})(PostList)