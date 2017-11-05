import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostAsync } from '../actions/post'

import Header from './Header'
import PostForm from './PostForm'
import Footer from './Footer'

class EditPost extends Component {
    componentWillMount() {
        this.props.fetchPostAsync(this.props.match.params.id)
    }

    submit = (values) => {
        console.log(values)
    }
    
    render() {
//        console.log(this.props.post)
        return (
            <div className="App">
				<Header />
				<div className="container">
					<div className="title-view">
						<h4>Edit Post</h4>
					</div>
					<PostForm onSubmit={this.submit} post={this.props.post} />
				</div>
				<Footer />
			</div>
        )
    }
}
const mapStateToProps = ({ post }) => ({ post })
export default connect(mapStateToProps, { fetchPostAsync })(EditPost)