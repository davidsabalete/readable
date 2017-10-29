import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import PostList from './PostList'
import Footer from './Footer'
import CreatePost from './CreatePost'

class MainContainer extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={PostList} />
					<Route exact path="/:category/posts" component={props => <PostList {...props}/>} />
					<Route exact path="/create/post" component={CreatePost} />
				</Switch>
				<Footer />
			</div>
		)

	}
}

export default MainContainer