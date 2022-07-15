import {configureStore} from "@reduxjs/toolkit";
import {postsSlice} from "../features/posts/posts-slice";
import {useDispatch} from "react-redux";
import {currentId} from "../features/currentId/currentId-slice";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        currentId: currentId.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

