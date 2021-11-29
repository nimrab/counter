import React from 'react';
import {CountScreen} from "../CountScreen/CountScreen";
import css from "../App.module.css";
import {Button} from "../Button/Button";
import {AppType} from "../App";
import {SetScreen} from "../SetScreen/SetScreen";


type CountComponentPropsType = {
    state: AppType
    incrementCount: () => void
    resetCount: () => void
    setValueByButton: () => void
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    disableInc: boolean
    disableReset: boolean
    disableSet: boolean
    valueIsSet: boolean
    error: boolean
    btnClassName: string
}

export const CountComponent = (props: CountComponentPropsType) => {




    return (
        <>

            {props.valueIsSet
                ? <CountScreen
                    currentCount={props.state.currentCount}
                    maxCount={props.state.maxCount}
                    valueIsSet={props.state.valueIsSet}
                />
                : <SetScreen
                    setMaxValue={props.setMaxValue}
                    setStartValue={props.setStartValue}
                    startCount={props.state.startCount}
                    maxCount={props.state.maxCount}
                    error={props.error}
                />}


            <div className={css.button_block}>

                <Button
                    name={'inc'}
                    callback={props.incrementCount}
                    className={props.btnClassName}
                    disable={props.disableInc}
                />

                <Button
                    name={'reset'}
                    callback={props.resetCount}
                    className={props.btnClassName}
                    disable={props.disableReset}
                />

                <Button
                    name={'set'}
                    callback={props.setValueByButton}
                    className={props.btnClassName}
                    disable={props.disableSet}
                />

            </div>
        </>
    )
}

