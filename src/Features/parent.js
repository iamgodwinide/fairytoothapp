const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    isLoggedIn: false,
    currentParent: {},
    parents: {}
}

const parentSlice = createSlice({
    name: 'parent',
    initialState,
    reducers: {
        register(state, { payload }) {
            state.isLoggedIn = true;
            state.parents[payload.ICNumber] = payload
        },
        login(state, { payload }) {
            state.isLoggedIn = true;
            state.currentParent = payload;
        },
        logout() {
            state.isLoggedIn = false;
            state.currentParent = {};
        }
    }
});

export const { register, login, logout } = parentSlice.actions

export default parentSlice.reducer;