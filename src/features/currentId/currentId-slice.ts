import {createSlice} from "@reduxjs/toolkit";

const initialState: null = null;

export const currentId = createSlice({
    name: 'currentId',
    initialState,
    reducers: {
        setCurrentId: (state, action) => {
            state = action.payload

            return state
        }
    }
})

export const {setCurrentId} = currentId.actions;