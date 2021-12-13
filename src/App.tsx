import React, {useEffect, useState} from 'react';
import './App.module.css';
import css from './App.module.css'
import {CountComponent} from "./CountCopmponent/CountComponent";
import {SetComponent} from "./SetComponent/SetComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./bll/store/store";
import {switchErrorAC} from "./bll/store/counter-reducer";

export type AppType = {
    startCount: number
    maxCount: number
    currentCount: number
    valueIsSet: boolean
}

export const App = () => {

    const counter = useSelector<RootReducerType, AppType>(state=> state.counter)
    const dispatch=useDispatch()


    const disableInc = (counter.currentCount === counter.maxCount) || (!counter.valueIsSet)
    const disableReset = (counter.currentCount === counter.startCount) || (!counter.valueIsSet)
    const disableSet = (counter.startCount < 0) || (counter.startCount >= counter.maxCount) || (counter.valueIsSet)
    const error = disableInc && disableReset && disableSet
    dispatch(switchErrorAC(error))


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

