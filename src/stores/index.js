import { configureStore } from 'redux-starter-kit';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const store = configureStore({
    devTools: true,
    reducer: reducers,
    middleware: [thunk],
});

export default store;

console.log(store);