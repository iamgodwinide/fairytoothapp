import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const childrenSlice = createSlice({
    name: 'children',
    initialState,
    reducers: {
        addChiild(state, { payload }) {
            state[payload.id] = payload;
        },
        updateChild(state, { payload }) {
            state[payload.id] = payload;
        },
        removeChild(state, { payload }) {
            const newState = [...state];
            delete newState[payload];
            state = newState;
        }
    }
})

export const { addChiild, updateChild, removeChild } = childrenSlice.actions;

export default childrenSlice.reducer;
