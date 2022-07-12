import {createAsyncThunk} from "@reduxjs/toolkit";
import * as api from '../api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await api.getPosts()

    return response.data
})

export const createPost = createAsyncThunk('posts/createPost', async (post: any) => {
    const response = await api.createPost(post)

    return response.data
})