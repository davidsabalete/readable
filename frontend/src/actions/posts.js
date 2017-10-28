import { api } from '../utils/api'

export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS'

// export const fetchPosts = (dispatch) => {
//   api
//     .get('/posts')
//     .then(res => dispatch(loadPosts(res.data)))
// }
export const fetchPosts = () => {
  return api.get('/posts').then(res => res.data)
}
export const loadPosts = (data) => ({
  type: LOAD_POSTS,
  payload: data
})

export const fetchCategoryPosts = (category) => {
  return api.get(`/${category}/posts`).then(res => res.data)
}
export const loadCategoryPosts = (category, data) => ({
  type: LOAD_CATEGORY_POSTS,
  payload: data
})


export const getAllPosts = () =>
  api
    .get('/posts')
    .then(res => res.data)
    .catch(error => console.log(error))