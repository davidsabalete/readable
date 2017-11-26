import axios from 'axios'

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND}`,
  headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': process.env.REACT_APP_API_TOKEN 
  },
  withCredentials: false
})
