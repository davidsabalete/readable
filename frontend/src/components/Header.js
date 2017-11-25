import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import FontAwesome from 'react-fontawesome'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">READABLE Project</Link>
        <CategoryList />
        <Link to="/create/post" className="btn btn-primary" style={{ float: 'right' }}>
          <FontAwesome name="pencil" aria-hidden="true" /> New Post
        </Link>
      </nav>
    )
  }
}

export default Header
