import React from 'react'
import { connect } from 'react-redux'
import Post from '../../components/Post'


class HomePostList extends React.Component {
	render() {
		return(
			<div className="post-list">
				{this.props.posts.length === 0 && <p>There are no posts for this category</p>}
				{this.props.posts.map(post => (
					<Post key={post.id} post={post} />
				))}
			</div>
		)
	}
}
const mapStateToProps = ({ posts, post }) => ({ posts, post })
const mapDispatchToProps = { }
export default connect(mapStateToProps, mapDispatchToProps)(HomePostList)