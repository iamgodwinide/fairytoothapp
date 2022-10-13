const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    currentMonth: 10,
    progress: []
};

const toothProgressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        addProgress(state, { payload }) {
            if (state.currentMonth === new Date().getMonth()) {
                state.progress = [
                    ...state.progress,
                    payload
                ]
            } else {
                state.currentMonth = new Date().getMonth();
                state.progress = [
                    payload
                ];
            }
        }
    }
});

export const { addProgress } = toothProgressSlice.actions

export default toothProgressSlice.reducer;