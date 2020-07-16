import { authReducer } from "../reducers/authReducer";
const { createStore, combineReducers } = require("redux");


const reducers = combineReducers({
    auth: authReducer
});


export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );