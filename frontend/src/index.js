import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import Main from './components/Main';

const store = createStore(
  combineReducers({
    ...reducers,
  })
);

ReactDOM.render(
  <Provider store={store} >
	<BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
      </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
