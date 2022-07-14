import axios from "axios";
import {PostEntity, PostsEntity} from "types";

const API = axios.create({baseURL: 'http://localhost:5000'});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost: PostEntity) => API.post('/posts', newPost);
export const updatePost = (id: string, updatedPost: PostEntity) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id: string) => API.delete(`/posts/${id}`);