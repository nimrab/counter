import React, {ChangeEvent} from "react";
import css from './SetScreen.module.css'
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../bll/store/store";
import {AppType} from "../App";
import {setMaxCountAC, setStartCountAC, switchValueIsSetAC} from "../bll/store/counter-reducer";


type SetScreenPropsType = {
    error: boolean
}

export const SetScreen = (props: SetScreenPropsType) => {

    const dispatch = useDispatch()
    const counter = useSelector<rootReducerType, AppType>(state=> state.counter)

    const inputClassName = `${css.input} ${props.error ? css.screen_error : ''}`


    const maxValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        dispatch(setMaxCountAC(+event.currentTarget.value))
        dispatch(switchValueIsSetAC(false))
    }

    const minValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        dispatch(setStartCountAC(+event.currentTarget.value))
        dispatch(switchValueIsSetAC(false))
    }





    return (

        <div className={css.setScreenBox}>

            <div className={css.value_input_box}>
                <span className={css.spanText}>max value:</span>
                <input
                    className={inputClassName}
                    value={counter.maxCount}
                    type="number"
                    onChange={maxValueOnChangeHandler}
                />
            </div>

            <div>
                <span className={css.spanText}>start value:</span>
                <input
                    className={inputClassName}
                    value={counter.startCount}
                    type="number"
                    onChange={minValueOnChangeHandler}

                />
            </div>

        </div>

    )


}