import { createStore, combineReducers } from "redux";
import oanTuTiReducer from './reducers/oanTuTiReducer';

const rootReducer = combineReducers({
    // key: value
    oanTuTiReducer,
});

const store = createStore(
    rootReducer,
    // Config redux dev tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;