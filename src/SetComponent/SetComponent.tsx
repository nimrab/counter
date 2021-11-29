import React from 'react';
import css from "../App.module.css";
import {Button} from "../Button/Button";
import {AppType} from "../App";
import {SetScreen} from "../SetScreen/SetScreen";

type SetComponentPropsType = {
    state: AppType
        setMaxValue: (value: number) => void
        setStartValue: (value: number) => void
    setValueByButton: () => void
    disableSet: boolean
    btnClassName: string
    error: boolean
}


export const SetComponent = (props: SetComponentPropsType) => {
    return (
        <>
            <SetScreen
                setMaxValue={props.setMaxValue}
                setStartValue={props.setStartValue}
                startCount={props.state.startCount}
                maxCount={props.state.maxCount}
                error={props.error}
            />

            <div className={css.button_block}>

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

