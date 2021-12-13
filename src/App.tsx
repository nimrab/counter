import React, {useEffect, useState} from 'react';
import './App.module.css';
import css from './App.module.css'
import {CountComponent} from "./CountCopmponent/CountComponent";
import {SetComponent} from "./SetComponent/SetComponent";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./bll/store/store";
import {switchErrorAC} from "./bll/store/counter-reducer";

export type AppType = {
    startCount: number
    maxCount: number
    currentCount: number
    error: boolean
    valueIsSet: boolean
}

export const App = () => {

    const dispatch = useDispatch()
    const counter = useSelector<rootReducerType, AppType>(state=> state.counter)



    const getFromLocalStorage = (itemName: string) => {
        const value = localStorage.getItem(itemName)
        if (value) {
            return JSON.parse(value)
        }
    }
    const setToLocalStorage = (itemName: string, value: number) => {
        localStorage.setItem(itemName, JSON.stringify(value))
    }


    // const initialStartCount = getFromLocalStorage('startCount')
    // const initialMaxCount = getFromLocalStorage('maxCount')
    // const initialCurrentCount = getFromLocalStorage('currentCount')
    // const dataReceivedFromLocalStorage = initialStartCount && initialMaxCount && initialCurrentCount

    //
    // const [state, setState] = useState<AppType>({
    //         startCount: 0,
    //         maxCount: 5,
    //         currentCount: 0,
    //         error: false,
    //         valueIsSet: false
    //     }
    // )
    //
    // useEffect(() => {
    //
    //     if (dataReceivedFromLocalStorage !== undefined) {
    //         setState({
    //             startCount: initialStartCount,
    //             maxCount: initialMaxCount,
    //             currentCount: initialCurrentCount,
    //             error: false,
    //             valueIsSet: !!dataReceivedFromLocalStorage
    //         })
    //     }
    //
    // }, [])


    // const incrementCount = () => {
    //     setToLocalStorage('currentCount', state.currentCount + 1)
    //     setState({...state, currentCount: state.currentCount + 1})
    //
    // }
    // const resetCount = () => {
    //     setToLocalStorage('currentCount', state.startCount)
    //     setState({...state, currentCount: state.startCount})
    // }
    // const setMaxValue = (value: number) => {
    //     setState({...state, maxCount: value, valueIsSet: false})
    // }
    // const setStartValue = (value: number) => {
    //     setState({...state, startCount: value, valueIsSet: false, currentCount: value})
    // }
    // const setValueByButton = () => {
    //
    //     setToLocalStorage('startCount', state.startCount)
    //     setToLocalStorage('maxCount', state.maxCount)
    //     localStorage.removeItem('currentCount')
    //     setState({...state, valueIsSet: !state.valueIsSet})
    // }


    const disableInc = (counter.currentCount === counter.maxCount) || (!counter.valueIsSet)
    const disableReset = (counter.currentCount === counter.startCount) || (!counter.valueIsSet)
    const disableSet = (counter.startCount < 0) || (counter.startCount >= counter.maxCount) || (counter.valueIsSet)
    const error = disableInc && disableReset && disableSet

    console.log(disableInc)
    console.log(disableReset)
    console.log(disableSet)
    console.log(error)

    const btnClassName = css.button
    return (

        <div className={css.main}>


            <div className={css.screen}>
                <SetComponent
                    disableSet={disableSet}
                    error={error}
                    btnClassName={btnClassName}
                />

            </div>

            <div className={css.screen}>
                <CountComponent
                    disableInc={disableInc}
                    disableReset={disableReset}
                    btnClassName={btnClassName}
                />

            </div>


        </div>
    )
}

