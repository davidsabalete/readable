import api from '../lib/api'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS'

export function fetchPostsAsync() {
  return dispatch => api
    .get(`/posts`)
    .then(response => response.data)
  	.then(
    	data => dispatch(fetchPosts(data)), 
    	error => console.error(error)
  	)
}  

export function fetchCategoryPostsAsync (category) {
  return dispatch =>
    api
      .get(`/${category}/posts`)
      .then(response => response.data)
      .then(
        data => dispatch(fetchCategoryPosts(category, data)),
        error => console.error(error)
      )
}

export function fetchPosts(data) {
  return {
    type: FETCH_POSTS,
    data
  }
}

function fetchCategoryPosts (category, data) {
  return {
    type: FETCH_CATEGORY_POSTS, 
    data
  }
}