import { combineReducers } from "redux";
import Todos from "./TodoReducers";

//sukombainina ir deda i stora. cia importinam visus turimus reducerius
const rootReducer = combineReducers({
	todos: Todos,
});

export default rootReducer;
