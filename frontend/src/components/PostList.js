import React, { Component } from 'react'
// import { withRouter } from 'react-router'
import Post from './Post'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'

class PostList extends Component {

  state = {
    posts: []
  }

  componentWillMount() {
    fetchPosts()
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
    if (category) {
      return (
        <div>{category}</div>
      )
    }
    return (
      <div>
        <div className="post-list">
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state, { params }) => ({
//   posts: getVisiblePosts(state.posts, params.category || '')
// })
// export default withRouter(connect(mapStateToProps, { 
//   fetchPosts, 
//   fetchCategoryPosts 
// })(PostList))

const mapStateToProps = (state, { params }) => ({})
const mapDispatchToProps = {
  fetchPosts
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
//export default PostList