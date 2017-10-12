import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import {fetchPostsAsync, fetchCategoryPostsAsync} from '../actions/posts'

class Main extends Component {
  componentDidMount() {
    this.fetchData()
  }
  
  componentdidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) {
      this.fetchData()
    }
  }
  
  fetchData = () => {
    const { category } = this.props.match.params
    if (category != null) {
      this.props.fetchCategotyPostsAsync(category) 
    } else {
      this.props.fetchPostsAsync() 
    }
  }
  
  render() {
    return (
      <div className="App">
      	<Header /> 
        <div className="App-list-post">
          <ul>
            <li>uno</li>
            <li>dos</li>
          </ul>
        </div>
      	<Footer />
      </div>
  	)
  }
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })
const mapDispatchToProps = { fetchPostsAsync, fetchCategoryPostsAsync }
export default connect(mapStateToProps, mapDispatchToProps)(Main)