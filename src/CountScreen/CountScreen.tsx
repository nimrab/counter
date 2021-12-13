import React from "react";
import css from './CountScreen.module.css'

type ScreenPropsType = {
    maxCount: number
    currentCount: number
    valueIsSet:boolean
}

export const CountScreen = (props: ScreenPropsType) => {

    const className=`${css.screen} ${props.currentCount === props.maxCount && props.valueIsSet ? css.red : ""}`

    return (

        <div className={className}>
            {
                props.valueIsSet
                ? props.currentCount
                : <span className={css.span_set}>setting value...</span>
            }

        </div>

    )


}