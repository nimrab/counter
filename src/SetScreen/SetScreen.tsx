import React from "react";
import css from './SetScreen.module.css'


type SetScreenPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    startCount: number
    maxCount: number
    error: boolean
}

export const SetScreen = (props: SetScreenPropsType) => {


    const inputClassName = `${css.input} ${props.error ? css.screen_error : ''}`

    return (

        <div className={css.setScreenBox}>

            <div className={css.value_input_box}>
                <span className={css.spanText}>max value:</span>
                <input
                    className={inputClassName}
                    value={props.maxCount}
                    type="number"
                    onChange={(event) => props.setMaxValue(+event.currentTarget.value)}
                />
            </div>

            <div>
                <span className={css.spanText}>start value:</span>
                <input
                    className={inputClassName}
                    value={props.startCount}
                    type="number"
                    onChange={(event) => props.setStartValue(+event.currentTarget.value)}

                />
            </div>

        </div>

    )


}