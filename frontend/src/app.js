import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import DetailPost from './components/DetailPost'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={PostList} />
				<Route exact path="/:category" component={props => <PostList {...props} />} />
				<Route exact path="/create/post" component={CreatePost} />
				<Route exact path="/:category/:id" component={props => <DetailPost {...props} />} />
			</Switch>
		)
	}
}

export default App