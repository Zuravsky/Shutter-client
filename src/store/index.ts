import {configureStore} from "@reduxjs/toolkit";
import {postsSlice} from "../features/posts/posts-slice";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
    }
})

// export type RootState = ReturnType<typeof store.getState>;
