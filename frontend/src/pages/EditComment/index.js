import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCommentAsync, editPostCommentAsync } from '../../actions/comments'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

class EditComment extends Component {

    state = {
        id: '',
        body: '',
        author: '',
    }

    componentWillMount() {
        const { id } = this.props.match.params
        this.props.fetchCommentAsync(id, (data) => {
            this.setState({
                id: data.id,
                body: data.body,
                author: data.author,
            })
        })
    }

    submit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.editPostCommentAsync(this.state, () => {
            this.props.history.goBack()
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
                        <h4>Edit Comment</h4>
                    </div>
                    <form onSubmit={this.submit}>

                        <div className="form-group">
                            <label>Comment</label>
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
                            <input 
                                type="text"
                                name="author"
                                value={this.state.author}
                                onChange={this.handleChange}
                                className="form-control"
                            />
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
const mapStateToProps = ({ comment }) => ({ comment })
export default connect(
    mapStateToProps, {
        fetchCommentAsync,
        editPostCommentAsync
    }
)(EditComment)