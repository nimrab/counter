import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
    disable?: boolean
    error?: boolean
}


export const Button = (props:ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (

        <button
            className={props.className}
            onClick={onClickHandler}
            disabled={props.error ?? props.disable}
        >
            {props.name}
        </button>

    )
}