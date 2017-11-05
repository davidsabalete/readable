import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class PostForm extends Component {

    renderCategories() {
        const { categories } = this.props
        return categories.map(category => <option key={category.name}>{category.name}</option>)
    }

    renderField(field) {
        const { meta: { touched, error } } = field
        const className = touched && error ? 'invalid' : null
        if (field.input.name === 'body') {
            return (
                <div className={'form-group ' + className}>
                    <label>{field.label}</label>
                    <textarea type="text" {...field.input} className="form-control">{field.input.value}</textarea>
                    <div className="invalid">{touched ? error : ''}</div>
                </div>
            )
        } else {
            return (
                <div className={'form-group ' + className}>
                    <label>{field.label}</label>
                    <input type="text" {...field.input} className="form-control" />
                    <div className="invalid">{touched ? error : ''}</div>
                </div>
            )
        }
    }

    renderCategoryField(field) {
        const { categories } = this.props;
        const { meta: { touched, error } } = field;
        const className = touched && error ? 'error' : null;

        return (
            <div className={'form-group ' + className}>
                <label>{field.label}</label>
                <select {...field.input} className="form-control text-capitalize">
                    <option value="" className="disabled">
                        Select a category
                        </option>
                    {categories.map(category => (
                        <option key={category.name} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <div className="invalid">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        console.log(this.props.post)
        return (
            <form onSubmit={handleSubmit}>
                <Field label="Title" name="title" component={this.renderField} value="prova" />
                <Field label="Content" name="body" component={this.renderField} />
                <Field label="Author" name="author" component={this.renderField} />
                <Field label="Category" name="category" component={field => this.renderCategoryField(field)} />
                <br />
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Save</button>{' '}
                <Link to={'/'} className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    const errors = {}
    if (!values.title) {
        errors.title = 'A title is required'
    }
    if (!values.body) {
        errors.body = 'A body is required'
    }
    if (!values.category) {
        errors.category = 'A category is required'
    }
    if (!values.author) {
        errors.author = 'An author is required'
    }
    return errors
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    post: state.post
})
export default connect(mapStateToProps)(reduxForm({
    validate,
    form: 'createForm'
})(PostForm))
