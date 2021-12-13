import React from 'react';
import {CountScreen} from "../CountScreen/CountScreen";
import css from "../App.module.css";
import {Button} from "../Button/Button";
import {AppType} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../bll/store/store";
import {setCurrentCountAC} from "../bll/store/counter-reducer";


type CountComponentPropsType = {

    disableInc: boolean
    disableReset: boolean
    btnClassName: string
}

export const CountComponent = (props: CountComponentPropsType) => {

    const dispatch = useDispatch()
    const counter = useSelector<RootReducerType, AppType>(state=> state.counter)

    const incrementCount = () => {
        //increase counter by 1
        dispatch(setCurrentCountAC(counter.currentCount + 1))
    }

    const resetCount =() => {
        dispatch(setCurrentCountAC(counter.startCount))
    }


    return (
        <>
            <CountScreen
                currentCount={counter.currentCount}
                maxCount={counter.maxCount}
                valueIsSet={counter.valueIsSet}
            />

            <div className={css.button_block}>

                <Button
                    name={'inc'}
                    callback={incrementCount}
                    className={props.btnClassName}
                    disable={props.disableInc}
                />

                <Button
                    name={'reset'}
                    callback={resetCount}
                    className={props.btnClassName}
                    disable={props.disableReset}
                />

            </div>
        </>
    )
}

