import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class EditForm extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: ''
    }

    componentWillMount() {
        const { post } = this.props
        console.log(post);
    }

    render() {
        const { categories } = this.props
        return (
            <form onSubmit={this.props.onSubmit}>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={this.state.title}
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <input
                        type="text"
                        value={this.state.body}
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        value={this.state.author}
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <select value={this.state.category}
                        className="form-control text-capitalize">
                        <option value="" className="disabled">
                            Select a category
                        </option>
                        {categories.map(category => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
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
        )
    }
}

const mapStateToProps = ({ post, categories }) => ({ post, categories })
export default connect(mapStateToProps)(EditForm)
