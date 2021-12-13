import {
    counterReducer,
    setCurrentCountAC,
    setMaxCountAC,
    setStartCountAC,
    switchErrorAC,
    switchValueIsSetAC
} from './counter-reducer'

test('counter should apply value', () => {


    const state = {
        startCount: 0,
        maxCount: 10,
        currentCount: 0,
        valueIsSet: false,
    }

    const action = setCurrentCountAC(15)

    const newState = counterReducer(state, action)

    expect(state.currentCount).toBe(0)
    expect(newState.currentCount).toBe(15)

})
test('counter should apply start value', () => {

    const state = {
        startCount: 0,
        maxCount: 10,
        currentCount: 0,
        valueIsSet: false,
    }

    const action = setStartCountAC(24)
    const newState = counterReducer(state, action)

    expect(state.startCount).toBe(0)
    expect(newState.startCount).toBe(24)

})
test('counter should apply max value', () => {

    const state = {
        startCount: 0,
        maxCount: 10,
        currentCount: 0,
        valueIsSet: false,
    }

    const action = setMaxCountAC(11)
    const newState = counterReducer(state, action)

    expect(state.maxCount).toBe(10)
    expect(newState.maxCount).toBe(11)

})
test('counter should switch valueIsSet value to opposite', () => {

    const state = {
        startCount: 0,
        maxCount: 10,
        currentCount: 0,
        valueIsSet: false,
    }

    const action = switchValueIsSetAC(true)
    const newState = counterReducer(state, action)

    expect(state.valueIsSet).toBe(false)
    expect(newState.valueIsSet).toBe(true)

})