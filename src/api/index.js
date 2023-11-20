import axios from 'axios'

const url = 'https://mywebblog-d164.onrender.com/posts'

export const feetchPost = () => axios.get(url);

export const createPost = (nePost) => axios.post(url, nePost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`)
