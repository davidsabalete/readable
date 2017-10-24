import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostList from '../components/PostList'

const Main = () => (
  <div className="App">
    <Header />
    <PostList {...this.props}/>
    <Footer />
  </div>
)

export default Main