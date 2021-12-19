import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import reducer from "./user/user-reducer";
import postReducer from "./posts/post-reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    userReducer:reducer,
    postReducer:postReducer,
})

export default createStore(rootReducer, compose(applyMiddleware(thunk)))