import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { dialogReducer } from 'redux-dialog'

import categories from './categories'
import posts from './posts'
import post from './post'
import comments from './comments'

export default combineReducers({
    categories, 
    posts, 
    post, 
    comments, 
    form: formReducer,
    dialogReducer: dialogReducer
})