import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export type rootReducerType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer)