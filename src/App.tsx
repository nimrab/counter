import React, {useState} from 'react';
import './App.module.css';
import css from './App.module.css'
import {CountComponent} from "./CountCopmponent/CountComponent";

export type AppType = {
    startCount: number
    maxCount: number
    currentCount: number
    error: boolean
    valueIsSet: boolean
}

export const App = () => {

    const initialState: AppType = {
        startCount: 0,
        maxCount: 5,
        currentCount: 0,
        error: false,
        valueIsSet: false
    }

    const [state, setState] = useState<AppType>(initialState)

    const incrementCount = () => {
        setState({...state, currentCount: state.currentCount + 1})
    }
    const resetCount = () => {
        setState({...state, currentCount: state.startCount})
    }
    const setMaxValue = (value: number) => {
        setState({...state, maxCount: value, valueIsSet: false})
    }
    const setStartValue = (value: number) => {
        setState({...state, startCount: value, valueIsSet: false, currentCount: value})
    }
    const setValueByButton = () => {
        setState({...state, valueIsSet: !state.valueIsSet})

    }



    const disableInc = (state.currentCount === state.maxCount) || (!state.valueIsSet)
    const disableReset = (state.currentCount === state.startCount) || (!state.valueIsSet)
    const disableSet = (state.startCount < 0) || (state.startCount >= state.maxCount) || (state.valueIsSet)
    const error = disableInc && disableReset && disableSet


    const btnClassName = css.button

    return (

        <div className={css.main}>

            <div className={css.screen}>

                <CountComponent
                    state={state}
                    incrementCount={incrementCount}
                    resetCount={resetCount}
                    setValueByButton={setValueByButton}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    disableInc={disableInc}
                    disableReset={disableReset}
                    disableSet={disableSet}
                    btnClassName={btnClassName}
                    valueIsSet={state.valueIsSet}
                    error={error}
                />

            </div>


        </div>
    )
}

