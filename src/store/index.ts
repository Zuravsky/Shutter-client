import {configureStore} from "@reduxjs/toolkit";
import {postsSlice} from "../features/posts/posts-slice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;