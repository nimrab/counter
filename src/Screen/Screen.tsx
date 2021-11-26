import React from "react";
import css from './Screen.module.css'

type ScreenPropsType = {
    counter: number
    maxCounter: number
}


export const Screen = (props: ScreenPropsType) => {


    const className=`${css.screen} ${props.counter === props.maxCounter ? css.red : ""}`

    return (

        <div className={className}>

            {props.counter}

        </div>

    )


}