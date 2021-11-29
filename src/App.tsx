import React, {useState} from 'react';
import './App.module.css';
import css from './App.module.css'
import {CountComponent} from "./CountCopmponent/CountComponent";
import {SetComponent} from "./SetComponent/SetComponent";

export type AppType = {
    startCount: number
    maxCount: number
    currentCount: number
    error: boolean
    valueIsSet: boolean
}

export const App = () => {

    const initialStartCount = localStorage.getItem('startCount')
    const initialMaxCount = localStorage.getItem('maxCount')
    const initialCurrentCount = localStorage.getItem('currentCount')

    const dataReceivedFromLocalStorage = initialStartCount && initialMaxCount && initialCurrentCount


           const initialState: AppType = {
                startCount: dataReceivedFromLocalStorage ? JSON.parse(initialStartCount) : 0,
                maxCount: dataReceivedFromLocalStorage ? JSON.parse(initialMaxCount) : 5,
                currentCount: dataReceivedFromLocalStorage ? JSON.parse(initialCurrentCount) : 0,
                error: false,
                valueIsSet: !!dataReceivedFromLocalStorage
        }

    const [state, setState] = useState<AppType>(initialState)

    const incrementCount = () => {
        localStorage.setItem('currentCount', JSON.stringify(state.currentCount + 1))
        setState({...state, currentCount: state.currentCount + 1})

    }
    const resetCount = () => {
        localStorage.setItem('currentCount', JSON.stringify(state.startCount))
        setState({...state, currentCount: state.startCount})
    }
    const setMaxValue = (value: number) => {
        setState({...state, maxCount: value, valueIsSet: false})
    }
    const setStartValue = (value: number) => {
        setState({...state, startCount: value, valueIsSet: false, currentCount: value})
    }
    const setValueByButton = () => {
        localStorage.setItem('startCount', JSON.stringify(state.startCount))
        localStorage.setItem('maxCount', JSON.stringify(state.maxCount))
        localStorage.removeItem('currentCount')
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
                <SetComponent
                    state={state}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setValueByButton={setValueByButton}
                    disableSet={disableSet}
                    btnClassName={btnClassName}
                    error={error}
                />

            </div>

            <div className={css.screen}>
                <CountComponent
                    state={state}
                    incrementCount={incrementCount}
                    resetCount={resetCount}
                    disableInc={disableInc}
                    disableReset={disableReset}
                    btnClassName={btnClassName}
                />

            </div>


        </div>
    )
}

