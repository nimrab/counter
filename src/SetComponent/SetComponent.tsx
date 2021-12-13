import React from 'react';
import css from "../App.module.css";
import {Button} from "../Button/Button";
import {AppType} from "../App";
import {SetScreen} from "../SetScreen/SetScreen";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../bll/store/store";
import {setCurrentCountAC, switchValueIsSetAC} from "../bll/store/counter-reducer";

type SetComponentPropsType = {
    disableSet: boolean
    error: boolean
    btnClassName: string

}


export const SetComponent = (props: SetComponentPropsType) => {

    const dispatch = useDispatch()
    const counter = useSelector<RootReducerType, AppType>(state => state.counter)

    const setValueByButton = () => {
        dispatch(switchValueIsSetAC(!counter.valueIsSet))
        dispatch(setCurrentCountAC(counter.startCount))
    }

    return (
        <>
            <SetScreen
                error={props.error}
            />

            <div className={css.button_block}>

                <Button
                    name={'set'}
                    callback={setValueByButton}
                    className={props.btnClassName}
                    disable={props.disableSet}
                />

            </div>
        </>
    )
}

