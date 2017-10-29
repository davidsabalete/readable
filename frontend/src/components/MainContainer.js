import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PostList from './PostList'
import Header from './Header'
import Footer from './Footer'

class MainContainer extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path={'/'} component={PostList} />
					<Route path={'/:category/posts'} component={PostList} />
				</Switch>
				<Footer />
			</div>
		)

	}
}

export default MainContainer