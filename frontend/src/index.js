import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Main from './pages/Main'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware( thunk )))

ReactDOM.render(
  <Provider store={store} >
	  <BrowserRouter>
      <div>
        <Route path='/(:category)' component={Main} />
        <Route path='/' component={Main} />
      </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
