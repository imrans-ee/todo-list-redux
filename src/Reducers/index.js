import todoReducers from "./todoReducers";
import { combineReducers } from "redux";
import loggedReducer from "./isLogged";

const rootReducer = combineReducers({
    todoReducers,
    loggedReducer
})

export default rootReducer;