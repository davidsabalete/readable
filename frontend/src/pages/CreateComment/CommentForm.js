import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class CommentForm extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
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

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field label="Comment" name="body" component={this.renderField} />
                <Field label="Author" name="author" component={this.renderField} />
                <br/>
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Save</button>{' '}
                <Link to={'/'} className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    const errors = {}
    if (!values.author) {
        errors.author = 'An author is required'
    }
    if (!values.body) {
        errors.body = 'A body is required'
    }
    return errors
}

// const mapStateToProps = (state) => ({
//     post: state.post
// })
export default connect()(reduxForm({
    validate,
    form: 'createForm'
})(CommentForm))