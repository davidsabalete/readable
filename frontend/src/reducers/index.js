import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import categories from './categories'
import posts from './posts'
import post from './post'
import comments from './comments'

export default combineReducers({
    categories, 
    posts, 
    post, 
    comments, 
    form: formReducer
})