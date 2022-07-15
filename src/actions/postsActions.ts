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

    return data
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id: string) => {
    const {data} = await api.deletePost(id);

    return data
})

export const likePost = createAsyncThunk('posts/likePost', async (id: string) => {
    const {data} = await api.likePost(id);

    return data
});

export const searchFortags = createAsyncThunk('posts/searchForTags', async (tag: string) => {
    const {data} = await api.searchForTag(tag);

    return data
})