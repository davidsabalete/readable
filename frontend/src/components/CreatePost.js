import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

class CreatePost extends Component {

	onFormSubmit(e) {
		e.preventDefault()
		alert('jurl')
	}
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="title-view">
						<h4>Create a new Post</h4>
					</div>
					<form onSubmit={this.onFormSubmit}>
						<div className="form-group">
							<label>Title</label>
							<input type="text" className="form-control" id="title" placeholder="Insert post title" />
						</div>
						<div className="form-group">
							<label>Content</label>
							<textarea id="content" className="form-control" placeholder="Your post..."></textarea>
						</div>
						<div className="form-group">
							<label>Category </label>{' '}
							<select className="form-control" id="category">
								<option>redux</option>
								<option>react</option>
								<option>udacity</option>
							</select>
						</div>
						<button type="submit" className="btn btn-primary">Save</button>{' '}
						<Link to={'/'} className="btn btn-danger">Cancel</Link>
					</form>
				</div>
				<Footer />
			</div>
		)
	}
}

export default CreatePost