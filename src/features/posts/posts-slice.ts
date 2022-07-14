import { createSlice} from "@reduxjs/toolkit";
import { PostsEntity } from "types";
import {createPost, deletePost, fetchPosts, updatePost} from "../../actions/postsActions";

const initialState: PostsEntity = [];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, {payload}) => {
                state = payload

                return state
            })
            .addCase(createPost.fulfilled, (state, {payload}) => {
                state = [...state, payload.post]

                return state
            })
            .addCase(updatePost.fulfilled, (state, {payload})=> {
                state = state.map(post => post._id === payload.post.id ? payload.post : post)

                return state
            })
            .addCase(deletePost.fulfilled, (state, {payload}) => {
                state = state.filter(post => post._id !== payload.id)

                return state
            })
    }
})