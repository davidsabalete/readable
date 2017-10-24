import React, { Component } from 'react'
import CategoryList from './CategoryList'

class Header extends Component {
  render() {
    return (
      <header>
        <h2>Project READABLE</h2>
        <CategoryList />
      </header>
    )
  }
}

export default Header
