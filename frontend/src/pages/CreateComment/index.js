import React from 'react'
import { connect } from 'react-redux'
import { createPostCommentAsync } from '../../actions/comments'

import Header from '../../components/Header'
import CommentForm from './CommentForm'
import Footer from '../../components/Footer'

class CreateComment extends React.Component {

    // componentDidMount() {
    //     console.log(this.props.match.params.id)
    // }

	submitComment = (values) => {
        values.parentId = this.props.match.params.id
		this.props.createPostCommentAsync(values, () => {
			this.props.history.goBack()
		})
	}

    render () {
        return (
            <div className="App">
            <Header />
            <div className="container">
                <div className="title-view">
                    <h4>Create a comment</h4>
                </div>
                <CommentForm onSubmit={this.submitComment} />
            </div>
            <Footer />
        </div>
        )
    }
}

export default connect(null, { createPostCommentAsync })(CreateComment)