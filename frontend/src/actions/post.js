import { api } from '../utils/api'

export const LOAD_POST = 'LOAD_POST'


export const fetchPost = (id) => dispatch => {
  api.get(`/posts/${id}`)
    .then(res => dispatch(loadPost(res.data)))
}
export const loadPost = (post) => ({
  type: LOAD_POST,
  post
})