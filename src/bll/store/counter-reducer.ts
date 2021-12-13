export type CounterReducerAT =
    SetCurrentCountACType
    | SetStartCountACType
    | setMaxCountACType
    | switchErrorACACType
    | switchValueIsSetACType

type initialStateType = {
    startCount: number
    maxCount: number
    currentCount: number
    error: boolean
    valueIsSet: boolean
}

const initialState = {
    startCount: 0,
    maxCount: 10,
    currentCount: 0,
    error: false,
    valueIsSet: false,
}

export const counterReducer = (state: initialStateType = initialState, action: CounterReducerAT): initialStateType => {
    switch (action.type) {
        case 'INCREASE-CURRENT-COUNT':
            return {...state, currentCount: action.value}
        case 'SET-START-COUNT':
            return {...state, startCount: action.value}
        case 'SET-MAX-COUNT':
            return {...state, maxCount: action.value}
        case 'SWITCH-ERROR':
            return {...state, error: action.value}
        case 'SWITCH-VALUE-IS-SET':
            return {...state, valueIsSet: action.value}

        default:
            return state
    }
}

type SetCurrentCountACType = ReturnType<typeof setCurrentCountAC>
type SetStartCountACType = ReturnType<typeof setStartCountAC>
type setMaxCountACType = ReturnType<typeof setMaxCountAC>
type switchErrorACACType = ReturnType<typeof switchErrorAC>
type switchValueIsSetACType = ReturnType<typeof switchValueIsSetAC>

export const setCurrentCountAC = (value: number) => {
    return {
        type: 'INCREASE-CURRENT-COUNT',
        value
    } as const
}
export const setStartCountAC = (value: number) => {
    return {
        type: 'SET-START-COUNT',
        value
    } as const
}
export const setMaxCountAC = (value: number) => {
    return {
        type: 'SET-MAX-COUNT',
        value
    } as const
}
export const switchErrorAC = (value: boolean) => {
    return {
        type: 'SWITCH-ERROR',
        value
    } as const
}
export const switchValueIsSetAC = (value: boolean) => {
    return {
        type: 'SWITCH-VALUE-IS-SET',
        value
    } as const
}

