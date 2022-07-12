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

                return state
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state = [...state, action.payload]

                return state
            })
    }
})