import {createAsyncThunk} from "@reduxjs/toolkit";
import * as api from '../api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await api.fetchPosts()

    return data
})

export const createPost = createAsyncThunk('posts/createPost', async (post: any) => {
    const {data} = await api.createPost(post)

    return data
})

export const updatePost = createAsyncThunk('posts/updatePost', async (args: any) => {
    const {currentId: id, postData: post} = args;
    const {data} = await api.updatePost(id, post)

    console.log(post, id)

    return data
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id: string) => {
    const {data} = await api.deletePost(id);

    return data
})