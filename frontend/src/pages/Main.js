import React from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import Footer from '../components/Footer'

const Main = () => (
  <div className="App">
    <Header />
    <PostList {...this.props}/>
    <Footer />
  </div>
)

export default Main