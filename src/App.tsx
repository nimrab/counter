import React, {useState} from 'react';
import './App.module.css';
import {Screen} from "./Screen/Screen";
import {Button} from "./Button/Button";
import css from './App.module.css'


function App() {

    const maxCounter = 5
    const resetCounter = 0

    let [counter, setCounter] = useState<number>(0)


    const incrementCallbackHandler = () => {
        if (counter < 5) {
            setCounter(++counter)
        }
    }

    const resetCallbackHandler = () => {
        setCounter(resetCounter)
    }


    const disableInc = counter === maxCounter
    const disableReset = counter === resetCounter


    const className = css.button
    //const classNameDisableInc = `${css.button} ${disableInc ? css.disable : ''}` дизейбл и так цвет серым делаем
    //const classNameDisableReset = `${css.button} ${disableReset ? css.disable : ''}` дизейбл и так цвет серым делаем


    return (
        <div className={css.main}>

            <Screen
                counter={counter}
                maxCounter={maxCounter}
            />


            <div className={css.button_block}>
                <Button
                    name={'inc'}
                    callback={incrementCallbackHandler}
                    className={className}
                    disable={disableInc}
                />

                <Button
                    name={'reset'}
                    callback={resetCallbackHandler}
                    className={className}
                    disable={disableReset}
                />

            </div>


        </div>
    )
}

export default App;
