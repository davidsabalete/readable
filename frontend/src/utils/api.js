import axios from 'axios'
// import { uuid } from 'uuid/v4'

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND}`,
  headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': process.env.REACT_APP_API_TOKEN 
  },
  //withCredentials: true
})

// // categories calls
// export const fetchCategories = () => api.get(`/categories`)

// // posts calls
// export const fetchPosts = () => api.get(`/posts`)
// export const fetchPost = id => api.get(`/posts/${id}`)
// export const fetchCategoryPosts = category => api.get(`/${category}/posts`)
// export const createPost = (values, callback) => api.post(`/posts`, {
//   id: uuid(),
//   timestamp: Date.now(),
//   title: values.title,
//   body: values.body,
//   author: values.author,
//   category: values.category
// })
// export const editPost = (id, values, callback) => api.put(`/posts/${id}`, values)
// export const deletePost = (id, callback) => api.delete(`/posts/${id}`)
// export const votePost = (id, vote) => api.post(`/posts/${id}`, {option: vote})

// // comments calls
// export const fetchPostComments = (postId) => api.get(`/posts/${postId}/comments`)
// export const createComment = (values, parentId, callback) => {
//   const { body, author } = values
//   const data = {
//   	id: uuid(),
//     parentId,
//     timestamp: Date.now(),
//     body,
//     author,
//   }
//   api.post(`/comments`, data)
// }
// export const voteComment = (id, vote) => api.post(`/comments/${id}`, {option: vote})
// export const fetchCommentsCount = (postId, callback) => api.get(`/posts/${postId}/comments`)
// export const fetchComment = id => api.get(`/comments/${id}`)
// export const deleteComment = (id, callback) => api.delete(`/comments/${id}`)
// export const editComment = (id, values, callback) => api.put(`/comments/${id}`, values)
