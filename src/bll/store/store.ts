import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../../utils/localstorage-utils";

export type RootReducerType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
    counter: counterReducer
})

const preloadedState = loadState()


export const store = createStore(rootReducer, preloadedState)


store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})
