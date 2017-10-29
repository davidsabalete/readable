import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
        <Link className="navbar-brand" to="/">READABLE Project</Link>
        <CategoryList />
      </nav>
    )
  }
}

export default Header
