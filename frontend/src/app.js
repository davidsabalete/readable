import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePost from './components/CreatePost'
import DetailPost from './components/DetailPost'
import EditPost from './components/EditPost'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/:category" component={props => <HomePage {...props} />} />
				<Route exact path="/create/post" component={CreatePost} />
				<Route exact path="/edit/post/:id" component={props => <EditPost {...props} />} />
				<Route exact path="/:category/:id" component={props => <DetailPost {...props} />} />
			</Switch>
		)
	}
}

export default App