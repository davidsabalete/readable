import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPostAsync } from '../actions/post'

import Header from './Header'
import PostForm from './PostForm'
import Footer from './Footer'


class CreatePost extends Component {
	submit = (values) => {
		this.props.createPostAsync(values, () => {
			this.props.history.push('/')
		})
	}
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="title-view">
						<h4>Create a new Post</h4>
					</div>
					<PostForm onSubmit={this.submit} />
				</div>
				<Footer />
			</div>
		)
	}
}

export default connect(null, { createPostAsync })(CreatePost)