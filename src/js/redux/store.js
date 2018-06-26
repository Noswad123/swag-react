import {createStore, combineReducers} from "redux";
import LangReducer from "./reducers/lang-reducer"
import InvolvementReducer from "./reducers/involvement-reducer"
export default createStore(
    combineReducers({LangReducer,InvolvementReducer})
    ,{}
);