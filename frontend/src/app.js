import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePost from './pages/CreatePost'
import DetailPost from './pages/DetailPost'
import EditPost from './pages/EditPost'
import EditComment from './pages/EditComment'
import CreateComment from './pages/CreateComment'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/:category" component={props => <HomePage {...props} />} />
				<Route exact path="/create/post" component={CreatePost} />
				<Route exact path="/edit/post/:id" component={props => <EditPost {...props} />} />
				<Route exact path="/edit/comment/:id" component={props => <EditComment {...props} />} />
				<Route exact path="/:category/:id" component={props => <DetailPost {...props} />} />
				<Route exact path="/:category/:id/create/comment" component={props => <CreateComment {...props} />} />
			</Switch>
		)
	}
}

export default App