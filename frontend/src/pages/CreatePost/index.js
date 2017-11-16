import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPostAsync } from '../../actions/post'

import Header from '../../components/Header'
import CreateForm from './CreateForm'
import Footer from '../../components/Footer'


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
					<CreateForm onSubmit={this.submit} />
				</div>
				<Footer />
			</div>
		)
	}
}

export default connect(null, { createPostAsync })(CreatePost)