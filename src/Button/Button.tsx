import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
    disable?: boolean
}


export const Button = (props:ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button
            className={props.className}
            onClick={onClickHandler}
            disabled={props.disable}
        >
            {props.name}
        </button>

    )


}