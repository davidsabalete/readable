import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostAsync } from '../../actions/post'

import Header from '../../components/Header'
import EditForm from './EditForm'
import Footer from '../../components/Footer'

class EditPost extends Component {
    componentWillMount() {
        this.props.fetchPostAsync(this.props.match.params.id)
    }

    submit = (values) => {
        console.log(values)
    }
    
    render() {
        // console.log(this.props.post)
        return (
            <div className="App">
				<Header />
				<div className="container">
					<div className="title-view">
						<h4>Edit Post</h4>
					</div>
					<EditForm onSubmit={this.submit} />
				</div>
				<Footer />
			</div>
        )
    }
}
const mapStateToProps = ({ post }) => ({ post })
export default connect(mapStateToProps, { fetchPostAsync })(EditPost)