import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    posts: null,
    comments: null
  }

  constructor(props) {
    super(props)
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND}/categories`
    console.log('fetching from url', url)
    fetch(url, { headers: { 'Authorization': 'supersecret' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data})
      })
  }

  render() {
	
    return (
      <div className="App">
      	<Header />

      	<ListPost posts={this.props.posts}/>

        <p>
          Talking to the backend yields these categories: <br/>
          {this.state.backend}
        </p>
      
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }) {
  return {
  	posts,
    comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
