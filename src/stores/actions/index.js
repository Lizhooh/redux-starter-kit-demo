import { createSlice } from 'redux-starter-kit';

const modal = createSlice({
    slice: 'index',
    initialState: {
        count: 1,
    },
    reducers: {
        add(state, { payload }) {
            state.count = state.count + payload;
            return state;
        },
        minus(state, { payload }) {
            state.count = state.count - payload;
            return state;
        },
    }
});

const wait = time => new Promise(rs => setTimeout(rs, time));

export default modal.reducer;

export const actions = {
    ...modal.actions,
    // 异步 action
    asyncAdd: (n) => async dispatch => {
        await wait(300);
        console.log('async + 1');
        dispatch(actions.add(n));
    },
    asyncMinus: (n) => async dispatch => {
        await wait(300);
        console.log('async - 1');
        dispatch(actions.minus(n));
    },
};
