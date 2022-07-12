import { createSlice} from "@reduxjs/toolkit";
import { PostsEntity } from "types";
import {createPost, fetchPosts} from "../../actions/postsActions";

const initialState: PostsEntity = [];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state = action.payload
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state = [...initialState, action.payload]
            })
    }
})