import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostAsync, updatePostAsync } from '../../actions/post'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
// import EditForm from './EditForm'
import Footer from '../../components/Footer'

class EditPost extends Component {

    state = {
        id: '',
        title: '',
        body: '',
        author: '',
        category: ''
    }

    componentWillMount() {
        const { id } = this.props.match.params
        this.props.fetchPostAsync(id, (data) => {
            this.setState({
                id: data.id,
                title: data.title,
                body: data.body,
                author: data.author,
                category: data.category
            })
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.props.updatePostAsync(this.state, () => {
            this.props.history.push('/')
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(() => ({ [name]: value }))
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="title-view">
                        <h4>Edit Post</h4>
                    </div>
                    <form onSubmit={this.submit}>

                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Content</label>
                            <textarea
                                type="text"
                                name="body"
                                value={this.state.body}
                                onChange={this.handleChange}
                                className="form-control">
                            </textarea>
                        </div>

                        <div className="form-group">
                            <label>Author</label>
                            <span>: {this.state.author}</span>
                        </div>

                        <div className="form-group">
                            <label>Category</label>
                            <span>: {this.state.category}</span>
                        </div>

                        <br />

                        <button type="submit"
                            className="btn btn-primary">
                            Save
                        </button>{' '}
                        <Link to={'/'}
                            className="btn btn-danger">
                            Cancel
                        </Link>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = ({ post }) => ({ post })
export default connect(
    mapStateToProps, {
        fetchPostAsync,
        updatePostAsync
    }
)(EditPost)