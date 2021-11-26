import React from 'react';
import {CountScreen} from "../CountScreen/CountScreen";
import css from "../App.module.css";
import {Button} from "../Button/Button";
import {AppType} from "../App";


type CountComponentPropsType = {
    state: AppType
    incrementCount: () => void
    resetCount: () => void
    disableInc: boolean
    disableReset: boolean
    btnClassName: string
}

export const CountComponent = (props: CountComponentPropsType) => {

    return (
        <>
            <CountScreen
                currentCount={props.state.currentCount}
                maxCount={props.state.maxCount}
                valueIsSet={props.state.valueIsSet}
            />

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

            </div>
        </>
    )
}

