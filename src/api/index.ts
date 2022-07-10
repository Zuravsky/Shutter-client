import axios from "axios";
import {PostsEntity} from "types";

const API = axios.create({baseURL: 'http://localhost:5000'});

export const getPosts = () => API.get('/posts');
export const createPost = (newPost: PostsEntity) => API.post('/posts', newPost);